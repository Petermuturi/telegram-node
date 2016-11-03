var express = require('express');
var app = express();
var bot = require('./main/bot.js')

app.get('/', bot.runBot);

var port = Number(process.env.PORT || 3000);

app.listen(port, function(){
	console.log('server listening on port 3000');
});