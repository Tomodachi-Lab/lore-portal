// required env vars
if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
  throw new Error('no GOOGLE_SERVICE_ACCOUNT_EMAIL env var set');
if (!process.env.GOOGLE_PRIVATE_KEY)
  throw new Error('no GOOGLE_PRIVATE_KEY env var set');
if (!process.env.GOOGLE_SPREADSHEET_ID_FROM_URL)
  // spreadsheet key is the long id in the sheets URL
  throw new Error('no GOOGLE_SPREADSHEET_ID_FROM_URL env var set');

const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const {
  getCandidates,
  addCandidate,
  getProjectApplicationsPublished,
  addProjectApplication,
} = require('./sheet');
const { sendNotification } = require('./telegram');
const app = express();

const { addGetRoute, addPutRoute } = require('./utils');

const router = express.Router();

// To notify successfull creations we use a Telegram Bot, if no token or
// chat id is specified we'll skip the notification part
const TelegramBot = require('node-telegram-bot-api');

const bot = (() => {
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHANNEL_ID) {
    return new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
  }
})();

addGetRoute(router, '/candidates', getCandidates);
addGetRoute(router, '/project-applications', getProjectApplicationsPublished);

addPutRoute(router, '/candidates', addCandidate);
addPutRoute(router, '/project-applications', (req, res) => {
  return addProjectApplication(req, res).then((response) => {
    if (bot && !response.error) {
      sendNotification(
        bot,
        `Nuova proposta inserita: ${response.name}\n${response.category}\n${response.description}\nDiscord: ${response.discord}\nTelegram: ${response.telegram}`
      );
    }

    return response;
  });
});

app.use(express.json());
app.use('/.netlify/functions/simple-be', router);
app.use('/', (_, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
