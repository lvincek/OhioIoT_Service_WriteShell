



require('dotenv').config({});

const express = require('express');
const app = express();

const db_functions = require('./definitions');
const responses = require('./responses')(db_functions);
const setRoutes = require('./routes');

// console.log("\t.. our db_functions:");
// console.log(db_functions);


setRoutes(app, responses);


let port = process.env.MODELS_PORT ? process.env.MODELS_PORT : 2222;

app.listen(port, (err) => {
	if (err) { console.error("got an error opening port "+port); }
	console.log('\t.. port '+port+' is open for business!');
});

