var http = require('http');
var fs = require('fs');
var extract = require('./extract');
var wss = require('./websockets-server');
var handleError = function (err, res) {
  res.writeHead(404);
  res.end();
};
// updating the original code to reflect Diet.js as required by instructions see line 23
 var server = http.createServer(function (req, res) {
  console.log('Responding to a request.');
  var filePath = extract(req.url);
  fs.readFile(filePath, function (err, data) {
    if (err) {
      handleError(err, res);
      return;
    } else {
		res.setHeader('content-type',  'application/pdf');  

      res.end(data);
    }
  });
});
//
var server =require('diet');
var app = server();
app.listen('http://localhost:8000');
app.get('/',function($){
	$.end('Hello World, coming from Diet.js')
});

//server.listen(3000); this is commented out because it blongs to the code prior to implementing Diet