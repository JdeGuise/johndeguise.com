const express = require('express');
const path = require('path');
const PORT = 5001;

const app = express();

// Serve static assets
app.use(express.static(path.join(__dirname, './vite-project/dist')));

// Route all other requests to index.html (for React Router)
app.get('*', (req, res, next) => {
	// If it doesn't look like a static file, serve index.html
	if (!req.path.match(/\.[^\/]+$/)) {
		res.sendFile(path.join(__dirname, './vite-project/dist', 'index.html'));
	} else {
		next();
	}
});

// Optional: Handle unknown static assets with a 404
app.use((req, res) => {
	res.status(404).send('Not found');
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
