/*jshint unused: true, node: true */
/*jslint unparam: true, node: true */
var express = require('express');
var MemJS = require("memjs").Client;
var memjs = MemJS.create();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  memjs.get("latest", function(err, value) {
    if (value) {
      response.send(value.toString());
    } else {
      response.send('No value set yet, use URL `/set/:value` to set');
    }
  });
});

app.get('/set/:value', function(request, response) {
  memjs.set("latest", request.params.value, function(err) {
    if (err) { response.send(err); }
    response.redirect('/');
  });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
