# Google reCAPTCHA Setup Quick Guide

## What is reCAPTCHA?
reCAPTCHA v3 is an invisible bot protection system that works in the background without interrupting users. It analyzes user behavior and assigns a score (0.0 to 1.0) to determine if the user is human.

## Quick Setup Steps

### 1. Register Your Site
- Go to: https://www.google.com/recaptcha/admin/create
- **Label**: Portfolio Contact Form
- **reCAPTCHA type**: **reCAPTCHA v3** (recommended - invisible)
- **Domains to add**:
  ```
  localhost
  yourdomain.com
  www.yourdomain.com
  ```
- Accept terms and click **Submit**

### 2. Get Your Keys
After registration, you'll get:
- **Site Key** (public) - Add to `.env` as `VITE_RECAPTCHA_SITE_KEY`
- **Secret Key** (private) - Keep secure, may need for backend verification

### 3. Add to Environment Variables
Add to your `.env` file:
```
VITE_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### 4. Test Locally
1. Make sure `localhost` is added to your reCAPTCHA domains
2. Restart dev server: `npm run dev`
3. Submit the contact form
4. Check browser console for any errors

## How It Works

1. **User fills out form** → Form looks normal, no checkbox
2. **User clicks "Send Message"** → reCAPTCHA runs invisibly in background
3. **Verification** → System checks if user is human
4. **If verified** → Form submits and email is sent
5. **If failed** → Error message shown

## reCAPTCHA v3 vs v2

| Feature | v3 (Current) | v2 |
|---------|-------------|-----|
| User Experience | Invisible, no interaction | Checkbox or image challenge |
| Protection | Behavioral analysis | Challenge-based |
| Score | 0.0 (bot) to 1.0 (human) | Pass/Fail |
| Best For | Contact forms, login | High-security needs |

## Important Notes

- ✅ **Free** for up to 1 million requests/month
- ✅ **No user interaction** required (v3)
- ✅ **Works automatically** once configured
- ⚠️ **Domain must match** - Add all domains you'll use
- ⚠️ **Local testing** - Must use `localhost` (not `127.0.0.1`)

## Troubleshooting

**Error: "reCAPTCHA not loaded"**
- Check `.env` file has `VITE_RECAPTCHA_SITE_KEY`
- Restart dev server after adding env variable

**Error: "reCAPTCHA verification failed"**
- Verify domain is registered in reCAPTCHA console
- For localhost, make sure you're using `http://localhost:5173` (or your port)
- Check browser console for specific error messages

**Form works but no verification**
- Check network tab to see if reCAPTCHA API is being called
- Verify Site Key is correct (no typos)

## Production Deployment

When deploying to production:
1. Add your production domain to reCAPTCHA settings
2. Update `.env` file (or use environment variables in your hosting platform)
3. Test the form on production domain
4. Monitor reCAPTCHA dashboard for any issues

## Security Best Practices

- ✅ Keep Secret Key secure (never expose in frontend)
- ✅ Use environment variables (already configured)
- ✅ Monitor reCAPTCHA dashboard for suspicious activity
- ✅ Consider adding backend verification for extra security (optional)

