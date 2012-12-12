var express = require('express');
var MemJS = require("memjs").Client

memjs = MemJS.create();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  memjs.get("latest", function(err, value) {
    if (value) {
      response.send(value.toString());
    } else {
      response.send('No value yet');
    }
  })
});

app.get('/set/:value', function(request, response) {
  memjs.set("latest", request.params.value);
  response.redirect('/');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
