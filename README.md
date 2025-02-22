# Telex SMS Integration

[![Node.js](https://img.shields.io/badge/Node.js-18.x+-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://typescriptlang.org/)
[![Africa's Talking](https://img.shields.io/badge/Africa's%20Talking-API-orange)](https://africastalking.com/)

A Node.js application that integrates Telex messaging with Africa's Talking SMS API to enable SMS notifications triggered by webhook events.

## Features

-
## Prerequisites

- Node.js 18.x+
- npm 9.x+
- Africa's Talking API account (Sandbox or Live)
- Telex.im account with webhook permissions
- Server/domain for webhook endpoint



## :rocket: Quick Start

1. Clone repo:
   git clone https://github.com/yourusername/telex-sms-integration.git

2. Install packages:
   cd telex-sms-integration
   npm install

3. Create .env file:
   AFRICASTALKING_API_KEY=your_api_key
   AFRICAS_TALKING_SENDER_ID=TELEX
   AFRICAS_TALKING_USERNAME=sandbox
   PORT=4001
   CORS_ORIGIN=https://telex.im

4. Start server:
   npm run dev

## :triangular_flag_on_post: Key Features

- /SMS command detection and auto-removal
- Multiple recipient support (+254700000001,+254700000002)
- HTML sanitization
- Sandbox/Live mode switching
- Error logging
- CORS protection

## :link: Webhook Configuration in Telex

1. Set Webhook URL to:
   https://your-domain.com/sms-webhook

2. Required Settings:
   - Phone Numbers (Comma-separated)
   - Username (Optional)

## :test_tube: Testing Flow

1. Send Telex message:
   /SMS This is a test message

2. Server processes:
   - Removes /SMS command
   - Validates numbers
   - Sends via Africa's Talking

3. Check console for:
   - Received messages
   - API responses
   - Error logs

## :cloud: Deployment

For AWS EB:
1. Zip project (exclude node_modules)
2. Create Node.js environment
3. Set env variables in AWS Console

For EC2:
1. Install Node.js, PM2, Nginx
2. Clone repo
3. npm install --production
4. Configure Nginx proxy
5. pm2 start src/app.ts

## :warning: Important Notes

- Sandbox requires +254700XXX numbers
- Live mode needs approved sender ID
- SMS costs apply in live mode
- Keep API keys secure
- Monitor usage limits

## Contributing
Fork the repository

Create feature branch: git checkout -b feature/new-feature

Commit changes: git commit -m 'Add new feature'

Push to branch: git push origin feature/new-feature

Submit pull request

## License
MIT License

## :e-mail: Support

Contact: eimuogbo@gmail.com
