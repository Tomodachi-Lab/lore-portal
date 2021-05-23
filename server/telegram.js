const channel = process.env.TELEGRAM_CHANNEL_ID;

export const sendNotification = (bot, message) =>
  bot.sendMessage(channel, message);
