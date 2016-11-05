var http = require('http');
var server = http.createServer();

var PORT = process.env.PORT || 8000
server.listen(PORT, function(){
 	console.log('Server listening on port ' + PORT);
 });

server.on('request', require('./routes'))

