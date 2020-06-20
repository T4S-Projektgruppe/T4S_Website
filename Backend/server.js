"use strict";

var express = require('express'),
    path = require('path'),
    app = express(),
    fs = require('fs'),
    compression = require('compression'),
    api = require('./routes/api');

var http = require('http');

var https = require('https'); // important for https, will be added later

/*const privateKey = fs.readFileSync('/etc/letsencrypt/live/thecrether.at/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/thecrether.at/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/thecrether.at/chain.pem', 'utf8');

const credentials = {
		key: privateKey,
		cert: certificate,
		ca: ca
};
*/


app.get('/', function (req, res) {
  res.redirect('/home');
}); // all use things

app.set('views', './views');
app.use(api);
app.use(compression());

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use('/static', express["static"](path.join(process.cwd(), '..', 'Frontend', 'static'))); // setting up http and https server

var httpServer = http.createServer(app); //const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, function () {
  console.log('HTTP Server running on port 80');
}); //httpsServer.listen(443, () => {
//		console.log('HTTPS Server running on port 443');
//});