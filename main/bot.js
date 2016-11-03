const TelegramBot = require('node-telegram-bot-api');
const config = require('../config/token.js');

const token = config.token;


module.exports={
	runBot: (req, res)=> {
		let bot = new TelegramBot(token, {polling: true});

		bot.on('message', function (msg) {
		  let chatId = msg.chat.id;
		  let photo = 'why-js.png';
		  bot.sendPhoto(chatId, photo, {caption: 'I <3 JS'});
		});
		console.log('runned')
	}
}