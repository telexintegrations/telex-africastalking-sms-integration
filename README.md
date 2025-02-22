
# Telex + Africa's Talking SMS Integration

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

A seamless integration between the **Telex chat platform** and **Africa's Talking SMS API**, enabling SMS messaging directly from Telex channels.

---

## 📌 Features

- **/SMS Command** - Send messages via SMS with `/SMS [message]` command.
- **HTML Stripping** - Automatic sanitization of HTML content.
- **Multi-Number Support** - Send to multiple phone numbers simultaneously.
- **Webhook Integration** - REST API endpoint for Telex integration.
- **CORS Security** - Whitelisted origins with proper headers.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Africa's Talking API credentials
- Telex channel admin access

### Local Development

1. **Clone repository**
   ```bash
   git clone https://github.com/your-username/telex-africastalking-sms-integration.git
   cd telex-africastalking-sms-integration
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your credentials:
   ```ini
   AFRICASTALKING_API_KEY=your_api_key
   AFRICASTALKING_USERNAME=your_username
   PORT=4000
   NODE_ENV=development
   ```

4. **Start server**
   ```bash
   npm run dev
   ```

---

## 🌍 Production Deployment (Render)

1. **Create new Web Service** on Render Dashboard.
2. **Connect your GitHub repository**.
3. Set environment variables:
   ![Render Environment Variables](https://assets-global.website-files.com/5f1a53d…5f3f.png)

4. Configure build settings:
   ```yaml
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

5. Select **Web Service** type with the following specs:
   - Instance Type: Starter
   - Region: Closest to your users
   - Auto-Deploy: On Git push

---

## 🔧 Telex Configuration

1. In Telex admin panel:
   - Integration Type: **Custom Webhook**
   - Webhook URL: `https://your-render-service.onrender.com/sms-webhook`
   - Allowed IPs: `0.0.0.0/0` (Render IP ranges)

2. Add required settings in Telex:
   ```yaml
   - label: "Phone numbers"
     type: string
     required: true
     default: "+2547XXXXXXXX,+2547XXXXXXXX"

   - label: "Username"
     type: string
     required: false
     default: "Telex User"
   ```

---

## 🧪 Testing

### Endpoints

```bash
# Health check
curl https://your-render-service.onrender.com

# Integration spec
curl https://your-render-service.onrender.com/integration-spec

# Webhook test (replace with actual values)
curl -X POST \
  https://your-render-service.onrender.com/sms-webhook \
  -H "Content-Type: application/json" \
  -d '{
    "message": "/SMS This is a test message",
    "settings": [
      {
        "label": "Phone numbers",
        "default": "+254712345678"
      },
      {
        "label": "Username", 
        "default": "Telex Test"
      }
    ]
  }'
```

### Telex Channel Screenshots

| Integration Settings | SMS Command Usage | Health Check Endpoint | Webhook Integration |
|-----------------------|-------------------|------------------------|---------------------|
| ![Integration Settings](link-to-settings-screenshot.png) | ![SMS Command](link-to-command-screenshot.png) | ![Health Check](link-to-health-check-screenshot.png) | ![Webhook Integration](link-to-webhook-screenshot.png) |

---

## ⚙️ Environment Variables

| Variable                  | Required | Default       | Description                              |
|---------------------------|----------|---------------|------------------------------------------|
| `AFRICASTALKING_API_KEY`  | Yes      | -             | API key from Africa's Talking           |
| `AFRICASTALKING_USERNAME` | Yes      | -             | Africa's Talking username                |
| `PORT`                    | No       | 4000          | Server port                              |
| `NODE_ENV`                | No       | development   | Runtime environment                      |

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.



## :e-mail: Support

Contact: eimuogbo@gmail.com
