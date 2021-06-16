const channel = process.env.TELEGRAM_CHANNEL_ID;
const TelegramBot = require('node-telegram-bot-api');

export const sendNotification = (message) => {
  const bot = (() => {
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHANNEL_ID) {
      return new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
    }
  })();

  if (bot) {
    bot.sendMessage(channel, message);
  }
};
