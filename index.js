const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5018;

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))
	.get('/blog', (req, res) => res.render('pages/blog'))
	.get('/projects', (req, res) => res.render('pages/projects'))
	.get('/about', (req, res) => res.render('pages/about'))
	.get('/maintenance', (req, res) => res.render('pages/maintenance'))
	.listen(PORT, () => console.log(`Listening on ${ PORT }`));