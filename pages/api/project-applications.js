import handleResponse from '../../server/handleResponse';
import {
  addProjectApplication,
  getProjectApplicationsPublished,
} from '../../server/sheet';
import { sendNotification } from '../../server/telegram';

const TelegramBot = require('node-telegram-bot-api');

const bot = (() => {
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHANNEL_ID) {
    return new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
  }
})();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    handleResponse({ res }, await getProjectApplicationsPublished());
    return;
  }

  if (req.method === 'PUT') {
    handleResponse(
      { res },
      await addProjectApplication(req.body),
      (response) => {
        if (bot) {
          const message = [
            `Nuova proposta inserita: ${response.name}`,
            response.category,
            response.description,
            `Discord: ${response.discord}`,
            `Telegram: ${response.telegram}`,
          ].join('\n');

          sendNotification(bot, message);
        }
      }
    );

    return;
  }

  res.status(400).send({ message: 'Method not allowed' });
}
