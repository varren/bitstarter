var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var indexData = fs.readFileSync('index.html', 'utf8');


app.get('/', function(request, response) {
  response.send(indexData);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
