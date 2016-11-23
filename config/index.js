let configuration;
if (process.env.NODE_ENV === 'production') {
	configuration = require('./production.js')
} else if (process.env.NODE_ENV === 'development') {
	configuration = require('./development.js')
}
console.log(configuration)
module.exports = configuration
