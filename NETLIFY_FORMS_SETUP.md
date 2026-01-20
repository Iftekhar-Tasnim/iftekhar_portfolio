# Netlify Forms Setup Guide

Your portfolio uses **Netlify Forms** for the contact form - a built-in feature that requires zero configuration!

## ✅ What's Already Done

The contact form is already configured with:
- ✅ `data-netlify="true"` attribute
- ✅ `data-netlify-honeypot="bot-field"` for spam protection
- ✅ Hidden form-name field
- ✅ Honeypot field for bots

## 📋 How It Works

When you deploy to Netlify, the build process automatically:
1. Detects forms with `data-netlify="true"`
2. Sets up form handling
3. Enables spam filtering
4. Creates a submissions dashboard

## 🚀 Deployment Steps

### 1. Deploy to Netlify
Push your code to GitHub and connect to Netlify (or deploy directly).

### 2. Verify Form Detection
After deployment:
- Go to your Netlify dashboard
- Navigate to **Forms** section
- You should see "contact" form listed

### 3. Configure Notifications (Optional)
In Netlify dashboard:
1. Go to **Forms** → **Form notifications**
2. Click **Add notification**
3. Choose **Email notification**
4. Enter your email: `iftekhartasnim@gmail.com`
5. Select the "contact" form
6. Save

## 📧 Viewing Submissions

All form submissions appear in:
- **Netlify Dashboard** → **Forms** → **contact**
- Email notifications (if configured)

## 🛡️ Spam Protection

Built-in protection includes:
- ✅ Honeypot field (catches bots)
- ✅ Akismet spam filtering (automatic)
- ✅ reCAPTCHA v2 (optional, can enable in settings)

## 🔧 Testing

### Local Testing
Forms won't work on `localhost`. To test:
1. Deploy to Netlify
2. Or use Netlify CLI: `netlify dev`

### Production Testing
1. Visit your deployed site
2. Fill out the contact form
3. Check Netlify dashboard for submission

## 📊 Free Tier Limits

- **100 submissions/month** (free tier)
- **10 MB file uploads** per submission
- **Unlimited** forms per site

## 🎯 No Environment Variables Needed!

Unlike EmailJS, Netlify Forms requires:
- ❌ No API keys
- ❌ No environment variables
- ❌ No external service configuration

Everything is handled by Netlify automatically! 🎉

## 📝 Form Code Reference

```jsx
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <p className="hidden">
    <label>
      Don't fill this out if you're human: <input name="bot-field" />
    </label>
  </p>
  {/* Your form fields */}
</form>
```

## 🆘 Troubleshooting

**Form not appearing in dashboard?**
- Make sure `data-netlify="true"` is present
- Redeploy the site
- Check build logs for form detection

**Submissions not working?**
- Verify form name matches hidden field
- Check Network tab for 404 errors
- Ensure you're testing on deployed site, not localhost

**Need more submissions?**
- Upgrade to Netlify Pro ($19/month)
- Or use alternative like Web3Forms (unlimited free)

---

**That's it!** Your contact form is ready to receive messages. 🚀
