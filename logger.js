/**
 * Shared application logger.
 *
 * Emits structured JSON to stdout (so cPanel's stderr.log keeps working as a
 * fallback) and, when LOKI_URL is set, also ships logs to a self-hosted
 * Grafana Loki instance for browsing and alerting in Grafana.
 *
 * Portable: copy this file into any Node app and set the env vars below.
 *   LOG_LEVEL              pino level — trace|debug|info|warn|error|fatal (default: info)
 *   APP_NAME / APP_ENV     Loki stream labels identifying this app + environment
 *   LOKI_URL               Loki base URL; omit to disable shipping (stdout still works)
 *   LOKI_CF_ACCESS_ID      Cloudflare Access service-token client id
 *   LOKI_CF_ACCESS_SECRET  Cloudflare Access service-token client secret
 */
const pino = require('pino');

const level = process.env.LOG_LEVEL || 'info';

// stdout is always on — this is the cPanel stderr.log fallback.
const targets = [{ target: 'pino/file', options: { destination: 1 }, level }];

// Ship to Loki only when configured, so local dev runs fine without it.
if (process.env.LOKI_URL) {
	const headers = {};
	if (process.env.LOKI_CF_ACCESS_ID && process.env.LOKI_CF_ACCESS_SECRET) {
		headers['CF-Access-Client-Id'] = process.env.LOKI_CF_ACCESS_ID;
		headers['CF-Access-Client-Secret'] = process.env.LOKI_CF_ACCESS_SECRET;
	}

	targets.push({
		target: 'pino-loki',
		level,
		options: {
			host: process.env.LOKI_URL,
			headers,
			labels: {
				app: process.env.APP_NAME || 'app',
				env: process.env.APP_ENV || 'development',
			},
			// Batching defaults: flush every 5s, drop oldest beyond 10k buffered
			// (bounds memory if Loki is briefly unreachable).
		},
	});
}

const logger = pino(
	{ level, serializers: { err: pino.stdSerializers.err } },
	pino.transport({ targets })
);

module.exports = logger;
