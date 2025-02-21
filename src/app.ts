import express, { Request, Response, RequestHandler } from 'express';
import cors from 'cors';
import { integrationSpecSettings } from './integrationSpec';
import { sendSMS } from './services/africastalkingService'; // Correct named import

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;



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

// Endpoint: /webhook - Receives channel messages and stores them for context
const webhookHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { message, settings } = req.body; // Extract message and sender info
  console.log("Received message on webhook:", req.body);
  
  if (!message) {
    res.status(400).send('Message is required'); // Send response directly, no return
    return; // Exit early after sending the response
  }

  // Strip HTML tags from the message
  const plainMessage = stripHtml(message);
  console.log('Stripped message:', plainMessage);

  // Format the SMS message to include channel and sender
  const formattedMessage = `${plainMessage}`;
  console.log('Formatted message to send:', formattedMessage);

  // Extract phone number from settings
  let phone_number = '';
  for (const setting of settings) {
    if (setting.label === 'Phone number') {
      phone_number = setting.default as string; 
      break; 
    }
  }

  if (!phone_number) {
    console.log('Phone number not found in settings');
    res.status(400).send('Phone number not found in settings'); // Send response directly if no phone number is found
    return;
  }

  console.log('Sending SMS to phone number:', phone_number);

  try {
    // Send SMS using the correct service
    await sendSMS(phone_number, formattedMessage);  // Use the correct named import here

    res.status(200).send('Message sent'); // Send response directly
  } catch (error) {
    console.error("Error with Africa's Talking API:", error);
    res.status(500).send('Error sending SMS'); // Send response directly
  }
};

app.post("/sms-webhook", webhookHandler); // Use the handler

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Express server is running on port ${port}`);
});
