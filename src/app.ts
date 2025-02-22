import express, { Request, Response, Application, RequestHandler } from 'express';
import cors from 'cors';
import { integrationSpecSettings } from './integrationSpec';
import { sendSMS } from './services/africastalkingService';
require('dotenv').config();

const app = express();
const port: number | string = process.env.PORT || 4000;

// Utility function to strip HTML tags
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

app.use(cors({ origin: 'https://telex.im' }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.get("/integration-spec", (req: Request, res: Response) => {
  res.json(integrationSpecSettings);
});

const webhookHandler: RequestHandler = async (req: Request, res: Response) => {
  const { message, settings } = req.body;
  
  if (!message) {
    res.status(400).send('Message is required');
    return;
  }

  // Extract settings
  let phoneNumbers: string[] = [];
  let username = '';
  
  settings.forEach((setting: { label: string; default: string }) => {
    if (setting.label === 'Phone numbers') {
      phoneNumbers = setting.default.split(',').map(num => num.trim());
    } else if (setting.label === 'Username') {
      username = setting.default;
    }
  });

  if (phoneNumbers.length === 0) {
    res.status(400).send('No phone numbers configured');
    return;
  }

  // Process message
  const plainMessage = stripHtml(message);
  
  if (!plainMessage.startsWith('/SMS')) {
    res.status(200).send('Ignored - no /SMS command');
    return;
  }

  const cleanMessage = plainMessage.replace(/^\/SMS\s*/, '');
  const formattedMessage = username ? `${username}: ${cleanMessage}` : cleanMessage;

  try {
    await sendSMS(phoneNumbers, formattedMessage);
    res.status(200).send('Message sent to all numbers');
  } catch (error) {
    console.error("SMS Error:", error);
    res.status(500).send('Error sending messages');
  }
};

app.post("/sms-webhook", webhookHandler);

app.listen(Number(port), '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${port}`);
});