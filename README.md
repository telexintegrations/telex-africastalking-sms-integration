# Telex Africa's Talking SMS Integration

## Overview
The **Telex SMS Notifier** is an integration that allows users to receive **real-time SMS notifications** for messages sent in their **Telex channels**. This ensures that users stay informed even when they are offline. The app is powered by **Africa's Talking API** for reliable SMS delivery.

## Features
- **Instant SMS Notifications**: Receive messages from Telex channels via SMS.
- **HTML Stripping**: Ensures messages are clean and readable by removing HTML tags.
- **Includes Sender & Channel Info**: Messages contain details about the sender and channel.
- **Customizable Phone Numbers**: Users can set recipient phone numbers for SMS alerts.
- **Secure API Integration**: Works seamlessly with Africa’s Talking API.
- **Robust Error Handling**: Logs issues and prevents message failures.
- **Auto Deployment**: Uses GitHub and Railway for continuous deployment.

## Technologies Used
- **Node.js** (Express.js for the backend)
- **TypeScript** (For type safety and better development experience)
- **Africa's Talking API** (For SMS delivery)
- **Telex Webhooks** (For receiving messages from channels)
- **AWS instance** (For hosting and deployment)
- **GitHub** (For version control and CI/CD)

## Getting Started
### Prerequisites
Ensure you have the following installed:
- **Node.js** (>=14.x)
- **npm** or **yarn**
- **Git**

### Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/telexintegrations/telex-africastalking-sms-integration.git
   cd telex-africastalking-sms-integration
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**
   Create a `.env` file and configure the following:
   ```env
   AFRICAS_TALKING_API_KEY=your-api-key
   AFRICAS_TALKING_PHONE_NUMBER=your-default-phone
   AFRICAS_TALKING_USERNAME=your-username
   AFRICAS_TALKING_SENDER_ID=your-sender-id
   ```

### Running Locally
To start the server locally:
```sh
npm run dev
```
Server should be running on `http://localhost:4001`

### API Endpoints
| Method | Endpoint         | Description                           |
|--------|-----------------|---------------------------------------|
| `POST` | `/sms-webhook`  | Receives messages from Telex         |
| `GET`  | `/health`       | Health check for server status       |
| `GET`  | `/integration-spec` | Returns integration specifications |

## Deployment
This project is deployed using **AWS FREE TIER** for continuous deployment.

To deploy manually:
```sh
git push origin main
```
Railway will detect changes and automatically redeploy the app.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added a new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a **Pull Request**.

## License
This project is **open-source** under the **MIT License**.

## Contact
For any issues or inquiries, reach out via **[Telex](https://telex.im)** or open an issue on **GitHub**.

---
🚀 **Stay connected, stay informed!**

