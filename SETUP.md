# WhatsApp Business API Setup Guide

## Overview
This project includes a Vercel serverless function that automatically sends WhatsApp messages to users when they submit their phone number.

## Step 1: Create WhatsApp Business Account (FREE)

### 1.1 Sign up at Meta for Developers
- Go to: https://business.facebook.com/
- Create a Business Account
- Add your business details

### 1.2 Create WhatsApp Business App
- Go to: https://developers.facebook.com/apps
- Click "Create App"
- Select "Business" type
- Choose "WhatsApp" as product

### 1.3 Add Phone Number
- In your app dashboard, go to **WhatsApp → Getting Started**
- Click **Add Phone Number**
- Verify via SMS/call
- This is your **WhatsApp Business Phone Number**

### 1.4 Get Your Credentials

#### A. Phone Number ID
- In WhatsApp section, find **Phone Number ID**
- Looks like: `123456789012345`
- Copy this value

#### B. Permanent Access Token
- Go to **API Setup** section
- Click **Create System User**
- Generate **Permanent Token**
- Select **whatsapp_business_messaging** permission
- Copy the token (starts with `EAA...`)

### 1.5 Create Message Template (REQUIRED)
WhatsApp requires pre-approved templates for first messages.

1. Go to: https://business.facebook.com/wa/manage/templates
2. Click **Create Template**
3. Choose: **Utility** category
4. Template Name: `welcome_message` (exactly this)
5. Language: English (en), Hindi (hi), Marathi (mr)
6. Sample Content:
```
Hello {{1}}, 👋

Thank you for visiting Mauli Furnishing! We're here to help you with premium home furnishing solutions:

• Custom Sofas & Curtains
• Ortho & Cotton Mattresses  
• Carpets & Artificial Grass
• Upholstery Services

Reply to see our catalog and exclusive offers! 😊
```
7. Submit for approval (takes 1-24 hours)

## Step 2: Deploy to Vercel (FREE)

### 2.1 Create Vercel Account
- Go to: https://vercel.com
- Sign up with GitHub

### 2.2 Install Vercel CLI
```bash
npm i -g vercel
```

### 2.3 Deploy Project
```bash
cd "C:/Users/vkgam/Downloads/mauli-furnishing-react-landing-page (2)"
vercel
```

### 2.4 Set Environment Variables
In Vercel Dashboard:
1. Go to your project → **Settings** → **Environment Variables**
2. Add these variables:

```
WHATSAPP_PHONE_ID        = 123456789012345    (your phone number ID)
WHATSAPP_ACCESS_TOKEN    = EAAxxxx...         (your permanent token)
WHATSAPP_TEMPLATE_NAME   = welcome_message    (your template name)
WHATSAPP_API_VERSION     = v18.0              (API version)
```

3. Click **Save**
4. Redeploy: `vercel --prod`

## Step 3: Test the Flow

### Local Testing
```bash
npm run dev
```

1. Open website
2. Wait 3 seconds for popup
3. Enter phone number
4. Click "Send WhatsApp Message"
5. Check your WhatsApp!

### Production Testing
1. Visit your Vercel URL (e.g., `https://mauli-furnishing.vercel.app`)
2. Test the popup
3. You should receive message instantly!

## Troubleshooting

### "Setup Required" Error
- Environment variables not set in Vercel
- Go to Vercel dashboard → Settings → Environment Variables

### "Template Not Found" Error
- Your template is still pending approval
- Wait 24 hours or check Meta Business dashboard

### "Phone Number Not Valid" Error
- Number must be in international format without +
- Example: 919876543210 (India number)

### Messages Not Sending
1. Check Vercel logs: `vercel logs`
2. Verify API token is "Permanent" not "Temporary"
3. Ensure phone number is verified in Meta dashboard

## Free Tier Limits

**Vercel:**
- 100,000 API requests/month (more than enough)
- Unlimited websites

**WhatsApp Business API:**
- 1,000 free conversations/month
- After that: ~$0.05 per conversation
- 1 conversation = 24 hours of messaging

## Support

- Meta Developer Support: https://developers.facebook.com/support
- Vercel Docs: https://vercel.com/docs
- WhatsApp Business API Docs: https://developers.facebook.com/docs/whatsapp/cloud-api
