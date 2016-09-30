var express = require('express');
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(layouts);

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('index', { api: process.env.API_URL || 'http://localhost:3001'});
})

app.listen(port, function() {
	console.log("Express is listening on port " + port);
})