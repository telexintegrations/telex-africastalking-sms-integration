export const integrationSpecSettings = {
  data: {
    date: {
      created_at: "2025-10-20",
      updated_at: "2025-10-20",
    },
    descriptions: {
      app_description: "An application that enables you to recieve TELEX notifications through your phone SMS.",
      app_logo: "https://iili.io/3lZ7ta.png",
      app_name: "SMS notifier",
      app_url: "https://telex-africastalking-sms-integration.onrender.com",
      background_color: "#FFFFFF",
    },
    integration_category: "Communication & Collaboration",
    integration_type: "output",
    is_active: true,
    output: [
      {
        label: "marketing-updates",
        value: true,
      },
    ],
    key_features: [
      "Messages are sent to phone number",
      "Customizable recipient phone numbers for targeted notifications.",
      "Seamless integration with Africa’s Talking API for reliable SMS delivery.",
      "Stay informed even when offline—never miss important updates.",
    ],
    permissions: {},
    settings: [
      {
        label: "Phone number",
        type: "number",
        description: "Phone number to send text to",
        default: 0,
        required: true,
      },
    ],
    endpoints: [
      {
        path: "/webhook",
        method: "POST",
        description: "Receives channel messages and stores them for context",
      },

    ],
    target_url: "https://telex-africastalking-sms-integration.onrender.com/sms-webhook",
  },
};
