import type { VercelRequest, VercelResponse } from '@vercel/node';

// WhatsApp Business API Configuration
// You'll set these in Vercel Environment Variables (Settings → Environment Variables)
const WHATSAPP_API_VERSION = process.env.WHATSAPP_API_VERSION || 'v18.0';
const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID; // Your WhatsApp Business Phone Number ID
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN; // Permanent Access Token
const WHATSAPP_TEMPLATE_NAME = process.env.WHATSAPP_TEMPLATE_NAME || 'welcome_message';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { phoneNumber, name, language = 'en' } = req.body;

    // Validate phone number
    if (!phoneNumber || phoneNumber.length < 10) {
      return res.status(400).json({
        error: 'Invalid phone number',
        message: 'Please provide a valid phone number'
      });
    }

    // Format phone number (remove + and spaces)
    const formattedPhone = phoneNumber.replace(/\D/g, '');

    // Check if environment variables are set
    if (!WHATSAPP_PHONE_ID || !WHATSAPP_ACCESS_TOKEN) {
      console.error('WhatsApp API credentials not configured');
      return res.status(500).json({
        error: 'Server not configured',
        message: 'WhatsApp Business API not configured yet',
        setupRequired: true
      });
    }

    // WhatsApp Business API Endpoint
    const apiUrl = `https://graph.facebook.com/${WHATSAPP_API_VERSION}/${WHATSAPP_PHONE_ID}/messages`;

    // API Payload - Using Template Message (Required for new conversations)
    const payload = {
      messaging_product: 'whatsapp',
      recipient_type: 'individual',
      to: formattedPhone,
      type: 'template',
      template: {
        name: WHATSAPP_TEMPLATE_NAME,
        language: {
          code: language === 'hi' ? 'hi' : language === 'mr' ? 'mr' : 'en'
        },
        components: [
          {
            type: 'body',
            parameters: [
              {
                type: 'text',
                text: name || 'Customer'
              }
            ]
          }
        ]
      }
    };

    // Call WhatsApp Business API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${WHATSAPP_ACCESS_TOKEN}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('WhatsApp API Error:', data);
      return res.status(response.status).json({
        error: 'WhatsApp API Error',
        message: data.error?.message || 'Failed to send message',
        details: data.error
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'WhatsApp message sent successfully',
      messageId: data.messages?.[0]?.id,
      recipient: formattedPhone
    });

  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({
      error: 'Server Error',
      message: 'Something went wrong. Please try again.'
    });
  }
}
