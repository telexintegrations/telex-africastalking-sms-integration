import axios, { AxiosResponse } from 'axios';
import qs from 'qs';



const sendSMS = async (phoneNumbers: string[], message: string): Promise<any> => {
  try {
    console.log('Sending SMS to:', phoneNumbers);

    const response: AxiosResponse = await axios.post(
      'https://api.sandbox.africastalking.com/version1/messaging',
      qs.stringify({
        username: 'sandbox',  // Replace with your Africa’s Talking username
        to: phoneNumbers.join(','),
        message,
        from: process.env.AFRICAS_TALKING_SENDER_ID,
      }),
      {
        headers: {
          'apiKey': process.env.AFRICASTALKING_API_KEY,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Error with Africa's Talking API:", error.response ? error.response.data : error.message);
    throw new Error('Failed to send SMS');
  }
};

// Named export
export { sendSMS };
