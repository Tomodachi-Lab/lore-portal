import { addProjectApplication } from '../../server/sheet';
import { sendNotification } from '../../server/telegram';

const TelegramBot = require('node-telegram-bot-api');

const bot = (() => {
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHANNEL_ID) {
    return new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
  }
})();

export default function handler(req, res) {
  if (req.method !== 'PUT') {
    res.status(400).send({ message: 'Method not allowed' });
    return;
  }

  return addProjectApplication(req.body).then((response) => {
    if (response.error) {
      res.status(500);
      res.json(response.error);

      return;
    }

    if (bot) {
      sendNotification(
        bot,
        `Nuova proposta inserita: ${response.name}\n${response.category}\n${response.description}\nDiscord: ${response.discord}\nTelegram: ${response.telegram}`
      );
    }

    res.json(response);
  });
}
