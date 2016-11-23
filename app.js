const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.dev.config.js')
const compiler = webpack(config)

// const PORT = process.env.PORT || 8000
// server.listen(PORT, function(){
//  	console.log('Server listening on port ' + PORT);
//  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
// server.on('request', require('./routes'))

// app.set('views', __dirname + '..' + '/views'); // general config
// app.set('view engine', 'jade');


if (process.env.NODE_ENV!=='production') {
	app.use(morgan('dev'));
  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}
const indexPath = path.join(__dirname, '/public/index.html')
const publicPath = express.static(path.join(__dirname, '/public'));

// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
// app.use(webpackHotMiddleware(compiler));

app.use('/public', publicPath)

app.use('/', require('./routes'))

//ROUTING:
// This is necessary for browser history to work properly
app.get('/', (req, res) => {
	res.sendFile(indexPath)
})


// app.use(express.static(path.join(__dirname, '../views')))


// app.use(cookieParser);
// app.use(session({
// 	secret: 'Optimus Prime is my real dad.',
// 	resave: true,
// 	saveUninitialized: false
// }));


// app.get('/', function(req, res){
// 	console.log('trying to get slash')
// 	res.sendFile(path.resolve('/Users/katherinemello/Desktop/Projects/personalWebsite/views/layout.html'));
// });

// app.get('/portfolio', function(req,res){
// 	Project.find({}).exec()
// 		.then(function(projects){
// 			res.render('portfolio', { projects:projects });
// 		})
// 	.then(null, function(err){
// 		console.error(err);
// 	});
// });

module.exports = app;

