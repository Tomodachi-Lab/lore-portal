import handleResponse from '../../server/handleResponse';
import {
  addProjectApplication,
  getProjectApplicationsPublished,
} from '../../server/sheet';
import { sendNotification } from '../../server/telegram';

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
        const message = [
          `Nuova proposta inserita: ${response.name}`,
          response.category,
          response.description,
          `Discord: ${response.discord}`,
          `Telegram: ${response.telegram}`,
        ].join('\n');

        sendNotification(message);
      }
    );

    return;
  }

  res.status(400).send({ message: 'Method not allowed' });
}
