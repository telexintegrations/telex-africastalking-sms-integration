export const integrationSpecSettings = {
  data: {
    date: {
      created_at: "2025-10-20",
      updated_at: "2025-10-20",
    },
    descriptions: {
      app_description: "An application that enables you to recieve TELEX notifications through your phone SMS.",
      app_logo: "https://res.cloudinary.com/dhspwfrlk/image/upload/v1740242267/l8qhhnzdcluzkoq3xysa.webp",
      app_name: "SMS notifier",
      app_url: "http://51.20.128.26",
      background_color: "#FFFFFF",
    },
    integration_category: "Communication & Collaboration",
    integration_type: "output",
    is_active: true,
    Author: "Emmanuel Muogbo",
    output: [
      {
        label: "marketing-updates",
        value: true,
      },
    ],
    key_features: [
      "Messages about product updates can be sent to customers via SMS.",
      "Customizable recipient phone numbers for targeted notifications.",
      "Seamless integration with Africa’s Talking API for reliable SMS delivery.",
      "Stay informed even when offline—never miss important updates.",
      "Simple setup and configuration for easy use.",
      "Three easy ways to get started: pick a specific output channel from the output section, put in your username(optional) and the phone numbers you  wanna send a message to in this format (+25470******, +23470******6), go to the channel and send in this format: /SMS <message>.",
    ],
    permissions: {},
    settings: [
      {
        label: "Phone numbers",
        type: "text",
        description: "Comma-separated phone numbers (e.g., +254711XXXYYY, +254733YYYZZZ)",
        default: "",
        required: true,
      },
      {
        label: "Username",
        type: "text",
        description: "Your username to include in messages",
        default: "",
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
    target_url: "http://51.20.128.26/sms-webhook",
  },
};
