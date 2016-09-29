// Dependencies 
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
// =============================================================

// GET Route to `/survey`
app.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname, 'app/public/survey.html'));
	console.log("Path to folders: " + path.join(__dirname));
});

// Default USE route that leads to `/home.html`
app.use('/home', function(req, res){
   res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});