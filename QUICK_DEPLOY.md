# Quick Deployment Guide

## 🚀 Deploy to Vercel in 5 Steps

### Step 1: Create Vercel Postgres Database

1. Go to https://vercel.com/dashboard
2. Select your project (or create new)
3. Go to **Storage** tab
4. Click **Create Database** → **Postgres**
5. Name it: `trust-solutions-db`
6. Click **Create**

### Step 2: Copy Environment Variables

Vercel will show you these variables. Copy them:

```
POSTGRES_PRISMA_URL=postgresql://...
POSTGRES_URL_NON_POOLING=postgresql://...
```

### Step 3: Set Environment Variables in Vercel

Go to **Project Settings** → **Environment Variables**

Add these:

```
DATABASE_URL = <paste POSTGRES_PRISMA_URL>
DIRECT_URL = <paste POSTGRES_URL_NON_POOLING>
EMAIL_USER = your-gmail@gmail.com
EMAIL_PASS = your-gmail-app-password
```

### Step 4: Deploy

```bash
git add .
git commit -m "Deploy to Vercel with PostgreSQL"
git push
```

Vercel will automatically deploy!

### Step 5: Create Admin User

After deployment, run:

```bash
# Set your production DATABASE_URL
export DATABASE_URL="<your-POSTGRES_PRISMA_URL>"

# Create admin user
npx tsx scripts/seed-production.ts admin YourSecurePassword123
```

## ✅ Done!

Your site is live! Access admin at:

```
https://your-site.vercel.app/admin/login
```

## 🔧 If Something Goes Wrong

### Build Failed?

- Check Vercel build logs
- Verify environment variables are set
- Make sure DATABASE_URL is correct

### Can't Login?

- Run seed script again
- Check admin user exists in database
- Verify password is correct

### Database Connection Error?

- Verify DATABASE_URL in Vercel settings
- Check database is running
- Ensure connection string includes `?sslmode=require`

## 📞 Need Help?

Check the full guide: `VERCEL_DEPLOYMENT_GUIDE.md`
