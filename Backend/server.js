
const express = require('express'),
path = require('path'),
app = express(),
fs = require('fs'),
compression = require('compression'),
api = require('./routes/api');
const http = require('http');
const https = require('https');

// important for https, will be added later
/*const privateKey = fs.readFileSync('/etc/letsencrypt/live/thecrether.at/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/thecrether.at/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/thecrether.at/chain.pem', 'utf8');

const credentials = {
		key: privateKey,
		cert: certificate,
		ca: ca
};
*/


app.use('/', function(req, res, next){
	if (!req.secure) {
		console.log("not secure")
		res.redirect('https://' + req.headers.host + req.url);
	}
	else next()

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
	//        res.redirect('https://example.com' + req.url);
})

// all use things
app.use(compression());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
// setting up http and https server
const httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
		console.log('HTTP Server running on port 80');
})
//httpsServer.listen(443, () => {
//		console.log('HTTPS Server running on port 443');
//});
