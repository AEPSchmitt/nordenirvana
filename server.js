﻿
/**
 * Module dependencies.
 */

var express = require('express'); 
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
//app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/tilmelding', routes.tilmelding);
app.get('/priser', routes.priser);
app.get('/aktiviteter', routes.aktiviteter);
app.get('/kontakt', routes.kontakt);
app.get('/about', routes.about);
app.get('/secret', routes.secret);

http.createServer(app).listen(app.get('port'), app.get('ip'), function () {
	console.log("Hey");
    console.log('Express server listening on: ' + app.get('ip') + ':' + app.get('port'));
});