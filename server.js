const express = require('express');
let app = express();
const bot = require('./main/bot.js')

app.get('/', bot.runBot);

let port = Number(process.env.PORT || 3000);

app.listen(port, function(){
	console.log('server listening on port 3000');
});