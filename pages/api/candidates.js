import handleResponse from '../../server/handleResponse';
import { addCandidate, getCandidates } from '../../server/sheet';
import { sendNotification } from '../../server/telegram';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    handleResponse({ res }, await getCandidates());
    return;
  }

  if (req.method === 'PUT') {
    handleResponse({ res }, await addCandidate(req.body), (response) => {
      const message = [
        `Nuovo candidato inserito:`,
        response.sector,
        response.role,
        response.description,
        `Discord: ${response.discord}`,
        `Telegram: ${response.telegram}`,
      ].join('\n');

      sendNotification(message);
    });

    return;
  }

  res.status(400).send({ message: 'Method not allowed' });
}
