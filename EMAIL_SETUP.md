# Email Setup Instructions

To enable the contact form email functionality, you need to configure email credentials:

## 1. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

## 2. Environment Configuration

1. Open `.env.local` file in the project root
2. Replace the placeholder values:

```
EMAIL_USER=Trustsolutions2025@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## 3. Alternative Email Services

If you don't want to use Gmail, you can modify the transporter configuration in `/src/app/api/contact/route.ts`:

### For Outlook/Hotmail:

```javascript
const transporter = nodemailer.createTransporter({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### For Custom SMTP:

```javascript
const transporter = nodemailer.createTransporter({
  host: "your-smtp-host.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 4. Testing

1. Start the development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check the inbox at Trustsolutions2025@gmail.com

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords, not your main account password
- Consider using environment variables in production deployment
