# Supabase Setup - Quick Guide

## Why Supabase? ✅

- **Free Tier**: 500MB database (vs Vercel's 256MB)
- **No Credit Card**: Start immediately
- **Easy Dashboard**: Visual database management
- **Automatic Backups**: Daily backups included
- **Better Value**: More features for free

## 5-Minute Setup

### 1. Create Supabase Account
- Go to https://supabase.com
- Sign up with GitHub
- Verify email

### 2. Create Project
- Click "New Project"
- Name: `trust-solutions`
- Generate strong password (SAVE IT!)
- Region: Choose closest to you
- Click "Create"

### 3. Get Connection Strings
Go to Settings → Database → Connection string

Copy these TWO strings:

**Transaction Mode (for DATABASE_URL):**
```
postgresql://postgres.[ref]:[password]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```

**Session Mode (for DIRECT_URL):**
```
postgresql://postgres.[ref]:[password]@aws-0-us-east-1.pooler.supabase.com:5432/postgres
```

### 4. Set Environment Variables

**In Vercel Dashboard:**
```
DATABASE_URL = <transaction-mode-url>
DIRECT_URL = <session-mode-url>
EMAIL_USER = your-gmail@gmail.com
EMAIL_PASS = your-app-password
```

### 5. Deploy
```bash
git add .
git commit -m "Deploy with Supabase"
git push
```

### 6. Create Admin User
After deployment:
```bash
DATABASE_URL="<your-transaction-url>" npx tsx scripts/seed-production.ts admin YourPassword123
```

## Done! 🎉

Your site is live with Supabase!

Access admin: `https://your-site.vercel.app/admin/login`

## Supabase Dashboard

View your data:
1. Go to Supabase Dashboard
2. Click "Table Editor"
3. See all your tables and data

## Troubleshooting

**Can't connect?**
- Check connection strings are correct
- Verify password is correct
- Ensure `?pgbouncer=true` is in DATABASE_URL

**Migration failed?**
- Set DIRECT_URL in Vercel
- Redeploy

## Support
- Supabase Docs: https://supabase.com/docs
- Discord: https://discord.supabase.com
