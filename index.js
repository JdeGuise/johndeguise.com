const express = require('express');
const path = require('path');
const PORT = 5001;

const app = express();

app.use(express.static(path.join(__dirname, './vite-project/dist')))
app.use((req, res, next) => {
	if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
		next();
	} else {
		res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
		res.header('Expires', '-1');
		res.header('Pragma', 'no-cache');
		res.sendFile(path.join(__dirname, './vite-project/dist', 'index.html'));
	}
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	console.log('Press Ctrl+C to quit.');
});