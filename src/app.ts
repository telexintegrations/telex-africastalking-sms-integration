import express, { Request, Response, RequestHandler } from 'express';
import cors from 'cors';
import { integrationSpecSettings } from './integrationSpec';
import { sendSMS } from './services/africastalkingService'; // Correct named import

require('dotenv').config();

const app = express();
const port = 4001;

// Utility function to strip HTML tags
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, '');
};

// Enable CORS for all routes
app.use(cors({
  origin: 'https://telex.im'  // Allow only this specific domain
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get("/integration-spec", (req, res) => {
  res.json(integrationSpecSettings);
});

const webhookHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { message, settings } = req.body;
  console.log("Received message:", req.body);

  if (!message) {
    res.status(400).send('Message required');
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

  // Validate settings
  if (phoneNumbers.length === 0) {
    res.status(400).send('No phone numbers configured');
    return;
  }

  // Process message
  const plainMessage = stripHtml(message);
  
  // Check for /SMS command
  if (!plainMessage.startsWith('/SMS')) {
    res.status(200).send('Ignored - no /SMS command');
    return;
  }

  // Remove command and format
  const cleanMessage = plainMessage.replace(/^\/SMS\s*/, '');
  let formattedMessage: string;
  
  if (!username) {
    formattedMessage = cleanMessage;
  } else {
    formattedMessage = `${username}: ${cleanMessage}`;
  }

  // Send SMS
  try {
    await sendSMS(phoneNumbers, formattedMessage);
    res.status(200).send('Message sent to all numbers');
  } catch (error) {
    console.error("SMS Error:", error);
    res.status(500).send('Error sending messages');
  }
};

app.post("/sms-webhook", webhookHandler); // Use the handler

// Start the server
app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
