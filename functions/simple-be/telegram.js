const channel = process.env.TELEGRAM_CHANNEL_ID;

const sendNotification = (bot, message) => bot.sendMessage(channel, message);

module.exports = {
  sendNotification,
};
