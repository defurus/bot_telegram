const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '806373533:AAE2POnuypIbqUF6R9fD2Ny4PQ2Q-gO6ouk';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
 q = false
qwerty = "напоминание"
// Matches "/echo [whatever]"
bot.onText(/\/start/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp ="мое почтение";
  bot.sendMessage(chatId, resp, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Посмотреть наш курс", 
            callback_data: "qq"
          }
        ]
      ]
    }
  } );
  bot.on('callback_query', query => {
    accept = "https://www.youtube.com/watch?v=0becPHg-8cU&feature=youtu.be"
    bot.sendMessage(chatId, accept)
    q = true
  });
  setTimeout (function () {
    if(q == false) {
    bot.sendMessage(chatId, qwerty, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Посмотреть наш курс", 
            callback_data: "qq"
          }
        ]
      ]
    }
  })
    }
    },5000);
  })


