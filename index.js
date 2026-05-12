const express = require('express');
const helmet = require('helmet');
const path = require('path');

const PORT = process.env.PORT || 5001;
const DIST_DIR = path.join(__dirname, './vite-project/dist');

const app = express();

app.use(helmet());

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
	console.log(`App listening on port ${PORT}`);
});
