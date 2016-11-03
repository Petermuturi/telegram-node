var TelegramBot = require('node-telegram-bot-api');
var config = require('../config/token.js');

var token = process.env.TOKEN || config.token;

module.exports={
	runBot: (req, res)=> {
		var bot = new TelegramBot(token, {polling: true});

		bot.on('message', (msg)=> {
		  var chatId = msg.chat.id;
		  var photo = 'why-js.png';
		  bot.sendPhoto(chatId, photo, {caption: 'I <3 JS'});
		});
		res.send('running:)')
	}
}
