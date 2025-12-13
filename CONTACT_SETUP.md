# Contact Form Setup Instructions

The contact form is now configured to send emails directly to your inbox using EmailJS. Follow these steps to complete the setup:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the template below:

### Template Settings:
- **Template Name**: Portfolio Contact Form
- **To Email**: `iftekhartasnim@gmail.com`
- **From Name**: Portfolio Contact Form
- **Reply To**: `{{reply_to}}` (this allows you to reply directly to the sender)

### Subject Line:
```
New Contact Form Message from {{from_name}}
```

### Email Body (Plain Text Version):
```
Hello,

You have received a new message from your portfolio contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your portfolio website.
You can reply directly to this email to respond to {{from_name}}.
```

### Email Body (HTML Version - Optional, for better formatting):
Copy this into the HTML editor if EmailJS supports it:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            border-bottom: 2px solid #64ffda;
            padding-bottom: 15px;
            margin-bottom: 20px;
        }
        .header h1 {
            color: #0a192f;
            margin: 0;
            font-size: 24px;
        }
        .section {
            margin: 20px 0;
        }
        .section-title {
            color: #64ffda;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }
        .info-row {
            margin: 10px 0;
            padding: 10px;
            background-color: #f8f9fa;
            border-left: 3px solid #64ffda;
        }
        .info-label {
            font-weight: 600;
            color: #0a192f;
        }
        .message-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 4px;
            border-left: 3px solid #64ffda;
            white-space: pre-wrap;
            font-size: 15px;
            line-height: 1.8;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #8892b0;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Form Message</h1>
        </div>
        
        <div class="section">
            <div class="section-title">Contact Information</div>
            <div class="info-row">
                <span class="info-label">Name:</span> {{from_name}}
            </div>
            <div class="info-row">
                <span class="info-label">Email:</span> <a href="mailto:{{from_email}}">{{from_email}}</a>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">Message</div>
            <div class="message-box">{{message}}</div>
        </div>
        
        <div class="footer">
            <p>This message was sent from your portfolio website.</p>
            <p>You can reply directly to this email to respond to {{from_name}}.</p>
        </div>
    </div>
</body>
</html>
```

4. **Important**: Make sure to set:
   - **To Email**: `iftekhartasnim@gmail.com`
   - **Reply To**: `{{reply_to}}` (this is crucial for replying to the sender)
   
5. **Copy the Template ID** (you'll need this for your `.env` file)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** under API Keys
3. **Copy the Public Key**

## Step 5: Set Up Google reCAPTCHA (Robot Verification)

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **+ Create** to register a new site
3. Fill in the form:
   - **Label**: Portfolio Contact Form (or any name you prefer)
   - **reCAPTCHA type**: Select **reCAPTCHA v3** (invisible, better UX)
   - **Domains**: Add your domains:
     - `localhost` (for local development)
     - Your production domain (e.g., `yourdomain.com`, `www.yourdomain.com`)
   - Accept the reCAPTCHA Terms of Service
   - Click **Submit**
4. **Copy your Site Key** (you'll need this for your `.env` file)
5. **Copy your Secret Key** (keep this secure, you may need it for backend verification later)

**Note**: reCAPTCHA v3 is invisible and runs in the background, providing a better user experience than v2.

## Step 6: Configure Environment Variables

1. Create a `.env` file in the root of your project (same level as `package.json`)
2. Add the following variables:

```
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Google reCAPTCHA Configuration
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

3. Replace the placeholder values with your actual credentials:
   - EmailJS credentials from Steps 2-4
   - reCAPTCHA Site Key from Step 5

## Step 7: Test the Form

1. Restart your development server (`npm run dev`)
2. Fill out and submit the contact form
3. The form will automatically verify you're not a robot (invisible reCAPTCHA)
4. Check your email inbox at `iftekhartasnim@gmail.com`

## Notes

- The `.env` file is already added to `.gitignore` to keep your credentials secure
- Never commit your `.env` file to version control
- The free tier allows 200 emails per month
- If you need more, consider upgrading to a paid plan

## Troubleshooting

### If emails aren't sending:
1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Make sure your EmailJS service is connected and active
4. Check that the template has the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{reply_to}}`

### If reCAPTCHA isn't working:
1. Verify your Site Key is correct in the `.env` file
2. Make sure you've added `localhost` to your reCAPTCHA domains (for local testing)
3. Check the browser console for reCAPTCHA-related errors
4. Ensure your domain matches one of the domains registered in reCAPTCHA
5. If testing locally, make sure you're using `http://localhost` (not `127.0.0.1`)

### Common Issues:
- **"reCAPTCHA not loaded"**: Make sure `VITE_RECAPTCHA_SITE_KEY` is set in your `.env` file
- **"reCAPTCHA verification failed"**: Check that your domain is registered in reCAPTCHA settings
- **Form submits but no email**: Check EmailJS dashboard for errors, verify service is active

