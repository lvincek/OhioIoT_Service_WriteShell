

require('dotenv').config({path: '../.env'});

const express = require('express');
const app = express();

const shell = require('./shell');


const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res, next) {

	console.log("got it");
	res.send("got it");

})

app.post("/", function(req, res, next) {

	console.log("incoming:", req.body);

	if (	
		!req.body || 	
		!req.body.hasOwnProperty('msg') ||
		typeof req.body.msg != 'string'
	) {
		console.log("invalid payload - returning");
		next();
	} 

	return shell(req.body.msg)
	.then(function(result) {
		console.log("response:", result);
		res.json(result);
	})

})

app.use(function(req, res, next, error) {
	console.log("failed to clear the route:");
	console.log(error);
})



let port = process.env.SHELL_PORT ? process.env.SHELL_PORT : 5555;

app.listen(port, (err) => {
	if (err) { console.error("got an error opening port "+port); }
	console.log('\t.. port '+port+' is open for business!');
});

