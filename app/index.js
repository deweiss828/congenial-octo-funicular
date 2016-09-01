var express = require('express');
var app = express();
var morgan = require('morgan');
var path =require('path');

var bodyParser =require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var models = require('../models');
var Project = models.Project;
var jade = require('jade');

app.set('views', __dirname + '..' + '/views'); // general config
app.set('view engine', 'jade');



app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
//If that is a get request, and the url matches a path in the public directory,
//it will serve that file
app.use(express.static(path.join(__dirname, '../node_modules')))

app.use(express.static(path.join(__dirname, '../browser')))
app.use(express.static(path.join(__dirname, '../views')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// app.use(cookieParser);
// app.use(session({
// 	secret: 'Optimus Prime is my real dad.',
// 	resave: true,
// 	saveUninitialized: false
// }));


//ROUTING:
app.get('/',function(req,res){
	console.log('trying to get slash')
	res.sendFile(path.resolve('/Users/katherinemello/Desktop/Projects/personalWebsite/views/layout.html'));
});

app.get('/portfolio', function(req,res){
	Project.find({}).exec()
		.then(function(projects){
			res.render('portfolio', { projects:projects });
		})
	.then(null, function(err){
		console.error(err);
	});
});

module.exports = app;
