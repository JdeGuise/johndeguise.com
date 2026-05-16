// Loads variables from a local .env file during development.
// In production (cPanel), environment variables are set via the
// Node.js App panel instead, and this call simply does nothing.
require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const path = require('path');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const logger = require('./logger');

const PORT = process.env.PORT || 5001;
const DIST_DIR = path.join(__dirname, './vite-project/dist');

const app = express();

// Running behind the cPanel/LiteSpeed reverse proxy: trust one hop so
// rate limiting sees the real client IP from X-Forwarded-For.
app.set('trust proxy', 1);

// Canonical host: 301 www -> bare domain so search engines see a single
// URL (matches the <link rel="canonical"> in index.html). GET/HEAD only,
// so a stray POST to www still reaches its handler instead of being lost.
app.use((req, res, next) => {
	const host = req.headers.host || '';
	if ((req.method === 'GET' || req.method === 'HEAD') && host.startsWith('www.')) {
		return res.redirect(301, `https://${host.slice(4)}${req.originalUrl}`);
	}
	next();
});

app.use(helmet());
app.use(express.json());

// Throttle contact submissions to curb spam and mailer abuse.
const contactLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 5,
	standardHeaders: true,
	legacyHeaders: false,
	message: { error: 'Too many messages sent. Please try again in a little while.' },
});

// Contact form: validate input and send an email via SMTP.
app.post('/api/contact', contactLimiter, async (req, res) => {
	const { name, phone, email, message, company } = req.body || {};

	// Honeypot: real users never see/fill `company`; bots do. Pretend
	// success so the bot does not learn it was filtered.
	if (company) {
		logger.warn({ ip: req.ip }, 'contact honeypot triggered');
		return res.json({ ok: true });
	}

	if (!name || !email || !message) {
		logger.info({ ip: req.ip }, 'contact rejected: missing required fields');
		return res
			.status(400)
			.json({ error: 'Name, email, and message are required.' });
	}

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
		logger.info({ ip: req.ip }, 'contact rejected: invalid email');
		return res
			.status(400)
			.json({ error: 'Please provide a valid email address.' });
	}

	try {
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT) || 587,
			secure: process.env.SMTP_SECURE === 'true',
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
			tls: {
				// Shared hosts often present a wildcard cert (e.g. *.web-hosting.com)
				// that does not match a mail.<domain> hostname. Prefer pointing
				// SMTP_HOST at the certificate-matching server hostname. Only set
				// SMTP_TLS_REJECT_UNAUTHORIZED=false if that is not possible.
				rejectUnauthorized:
					process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false',
			},
		});

		await transporter.sendMail({
			from: `"Website Contact" <${process.env.SMTP_USER}>`,
			to: process.env.CONTACT_TO || process.env.SMTP_USER,
			replyTo: `"${name}" <${email}>`,
			subject: `New contact form message from ${name}`,
			text:
				`Name: ${name}\n` +
				`Email: ${email}\n` +
				`Phone: ${phone || 'N/A'}\n\n` +
				`Message:\n${message}`,
		});

		logger.info({ to: process.env.CONTACT_TO || process.env.SMTP_USER }, 'contact email sent');
		res.json({ ok: true });
	} catch (err) {
		logger.error({ err }, 'contact email failed');
		res.status(500).json({
			error: 'Something went wrong sending your message. Please try again later.',
		});
	}
});

app.use(express.static(DIST_DIR));

// SPA fallback: any GET without a file extension serves index.html
app.use((req, res, next) => {
	if (req.method !== 'GET') return next();
	if (req.path.match(/\.[^\/]+$/)) return next();
	res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.use((req, res) => {
	res.status(404).send('Not found');
});

app.listen(PORT, () => {
	logger.info({ port: PORT }, 'server started');
});
