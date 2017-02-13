// Node.js + Express MemCachier Example
// Author: MemCachier Inc.
// License: MIT

/*jshint node: true */
/*jslint unparam: true*/

// Douglas Crockford is wrong, synchronous at startup makes sense.
/*jslint stupid: true*/

// Dependencies
var express = require('express'),
    logger = require('morgan'),
    path = require('path'),
    winston = require('winston'),
    memjs = require("memjs").Client;

// Constants / Configuration
var logFile = 'nodejs.log';
var mjs = memjs.create();

// Start Express
var app = express();
app.configure(function () {
  app.use(express.urlencoded());
  app.use(express.json());
});

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware Setup
app.use(logger('dev'));
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// Setup log file for file uploads
winston.add(winston.transports.File, { filename: logFile });

// Routes
app.get('/', function(req, res){
  mjs.get('example-key', function(err, v) {
    if (v) {
      res.render('index', {value: v.toString()});
    } else {
      res.render('index', {value: '<None set>'});
    }
  });
});

app.post('/set', function(req, res){
  var v  = req.param('value');
  console.log("Setting example-key to " + v);
  mjs.set('example-key', v, function(err) {
    if (err) {
      console.log("Error setting key: " + err);
      res.render('error', {
        message: err.message,
        error: err
      });
    } else {
      res.redirect('/');
    }
  });
});

/// Error Handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
