# Vercel Deployment Guide - Database Setup

## 🚀 Quick Start

### Step 1: Choose Your Database

For Vercel deployment, you have several options:

#### Option A: Vercel Postgres (Recommended) ⭐

- **Pros**: Integrated with Vercel, easy setup, serverless
- **Cons**: Paid after free tier
- **Best for**: Production applications

#### Option B: Neon (PostgreSQL)

- **Pros**: Generous free tier, serverless PostgreSQL
- **Cons**: External service
- **Best for**: Cost-effective production

#### Option C: PlanetScale (MySQL)

- **Pros**: Great free tier, scalable
- **Cons**: MySQL instead of PostgreSQL
- **Best for**: MySQL preference

## 📋 Setup Instructions

### Using Vercel Postgres (Recommended)

#### 1. Create Vercel Postgres Database

1. Go to your Vercel Dashboard
2. Select your project
3. Go to "Storage" tab
4. Click "Create Database"
5. Select "Postgres"
6. Choose a name (e.g., `trust-solutions-db`)
7. Select region (closest to your users)
8. Click "Create"

#### 2. Get Connection String

After creation, Vercel will show you environment variables:

- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL` (use this one!)
- `POSTGRES_URL_NON_POOLING`

#### 3. Update Prisma Schema

Update your `prisma/schema.prisma`:

\`\`\`prisma
datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
directUrl = env("DIRECT_URL")
}
\`\`\`

#### 4. Set Environment Variables in Vercel

Go to Project Settings → Environment Variables:

\`\`\`
DATABASE_URL=<POSTGRES_PRISMA_URL from Vercel>
DIRECT_URL=<POSTGRES_URL_NON_POOLING from Vercel>
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
\`\`\`

#### 5. Update package.json

Add build script:

\`\`\`json
{
"scripts": {
"build": "prisma generate && prisma migrate deploy && next build",
"postinstall": "prisma generate"
}
}
\`\`\`

#### 6. Create Migration

Run locally:

\`\`\`bash

# Generate migration from current schema

npx prisma migrate dev --name init

# This creates migration files in prisma/migrations/

\`\`\`

#### 7. Deploy to Vercel

\`\`\`bash
git add .
git commit -m "Add Vercel Postgres support"
git push
\`\`\`

Vercel will automatically:

1. Install dependencies
2. Generate Prisma Client
3. Run migrations
4. Build your app

---

### Using Neon (Free PostgreSQL)

#### 1. Create Neon Account

1. Go to https://neon.tech
2. Sign up (free)
3. Create a new project
4. Name it (e.g., `trust-solutions`)

#### 2. Get Connection String

Neon will provide:

- Connection string (pooled)
- Direct connection string

Copy both.

#### 3. Update Prisma Schema

\`\`\`prisma
datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
directUrl = env("DIRECT_URL")
}
\`\`\`

#### 4. Set Environment Variables

**Local (.env):**
\`\`\`
DATABASE_URL="postgresql://user:password@ep-xxx.neon.tech/dbname?sslmode=require"
DIRECT_URL="postgresql://user:password@ep-xxx.neon.tech/dbname?sslmode=require"
\`\`\`

**Vercel:**
Add the same variables in Project Settings → Environment Variables

#### 5. Deploy

Same as Vercel Postgres steps 5-7.

---

## 🔧 Migration Commands

### Create Initial Migration

\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

### Apply Migrations in Production

\`\`\`bash
npx prisma migrate deploy
\`\`\`

### Reset Database (⚠️ Deletes all data)

\`\`\`bash
npx prisma migrate reset
\`\`\`

### Generate Prisma Client

\`\`\`bash
npx prisma generate
\`\`\`

---

## 📝 Updated Files Needed

### 1. Update `prisma/schema.prisma`

\`\`\`prisma
generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "postgresql" // Changed from sqlite
url = env("DATABASE_URL")
directUrl = env("DIRECT_URL") // Added for connection pooling
}

// Rest of your models stay the same
model ContactMessage {
id String @id @default(cuid())
name String
email String
phone String?
company String?
service String
message String
status String @default("new")
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
replies MessageReply[]

@@index([createdAt])
@@index([status])
}

model MessageReply {
id String @id @default(cuid())
messageId String
message ContactMessage @relation(fields: [messageId], references: [id], onDelete: Cascade)
subject String
replyText String
sentBy String
sentAt DateTime @default(now())

@@index([messageId])
@@index([sentAt])
}

model PageView {
id String @id @default(cuid())
path String
userAgent String?
referer String?
createdAt DateTime @default(now())

@@index([path])
@@index([createdAt])
}

model Admin {
id String @id @default(cuid())
username String @unique
passwordHash String
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
}
\`\`\`

### 2. Update `package.json`

\`\`\`json
{
"name": "trust-solutions-blog",
"version": "0.1.0",
"private": true,
"scripts": {
"dev": "next dev",
"build": "prisma generate && prisma migrate deploy && next build",
"start": "next start",
"lint": "eslint",
"postinstall": "prisma generate"
},
"dependencies": {
// ... your existing dependencies
}
}
\`\`\`

### 3. Update `.gitignore`

Make sure these are ignored:

\`\`\`

# Environment

.env
.env.local
.env\*.local

# Database

_.db
_.db-journal
prisma/_.db
prisma/_.db-journal

# Vercel

.vercel
\`\`\`

### 4. Create `.env.example`

\`\`\`

# Database

DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
DIRECT_URL="postgresql://user:password@host:5432/database?sslmode=require"

# Email

EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
\`\`\`

---

## 🔐 Security Checklist

Before deploying:

- [ ] Remove `.env` from git history
- [ ] Set all environment variables in Vercel
- [ ] Use strong admin password
- [ ] Enable 2FA on Vercel account
- [ ] Review Prisma schema for sensitive data
- [ ] Set up database backups
- [ ] Configure CORS if needed
- [ ] Review API rate limits

---

## 🚀 Deployment Steps

### 1. Prepare Local Environment

\`\`\`bash

# Install dependencies

npm install

# Update Prisma schema to PostgreSQL

# (see above)

# Create migration

npx prisma migrate dev --name init

# Test build locally

npm run build
\`\`\`

### 2. Push to Git

\`\`\`bash
git add .
git commit -m "Prepare for Vercel deployment with PostgreSQL"
git push origin main
\`\`\`

### 3. Deploy to Vercel

**Option A: Vercel CLI**
\`\`\`bash
npm i -g vercel
vercel login
vercel
\`\`\`

**Option B: Vercel Dashboard**

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your Git repository
4. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add Environment Variables
6. Click "Deploy"

### 4. Set Up Database

1. Create Vercel Postgres (or Neon)
2. Copy connection strings
3. Add to Vercel Environment Variables
4. Redeploy

### 5. Create Admin User

After deployment, create admin user:

\`\`\`bash

# Connect to production database

npx prisma studio --browser none

# Or use a seed script

\`\`\`

---

## 📊 Post-Deployment

### Create Admin User in Production

Create a seed script:

\`\`\`typescript
// scripts/seed-production.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
const passwordHash = await bcrypt.hash('YOUR_SECURE_PASSWORD', 10);

await prisma.admin.upsert({
where: { username: 'admin' },
update: { passwordHash },
create: {
username: 'admin',
passwordHash
}
});

console.log('Admin user created');
}

main()
.catch(console.error)
.finally(() => prisma.$disconnect());
\`\`\`

Run it:
\`\`\`bash
DATABASE_URL="your-production-url" npx tsx scripts/seed-production.ts
\`\`\`

---

## 🔍 Troubleshooting

### Build Fails

**Error: "Can't reach database server"**

- Check DATABASE_URL is set in Vercel
- Verify connection string is correct
- Ensure database is accessible

**Error: "Migration failed"**

- Run `npx prisma migrate deploy` locally first
- Check migration files are committed to git
- Verify Prisma schema is correct

### Database Connection Issues

**Error: "Connection pool timeout"**

- Use `POSTGRES_PRISMA_URL` (pooled connection)
- Set `directUrl` for migrations

**Error: "SSL required"**

- Add `?sslmode=require` to connection string

### Admin Login Not Working

1. Check admin user exists in database
2. Verify password hash is correct
3. Check session cookies are working
4. Review browser console for errors

---

## 📈 Monitoring

### Vercel Analytics

- Enable in Project Settings
- Monitor page views
- Track performance

### Database Monitoring

- Check connection pool usage
- Monitor query performance
- Set up alerts for errors

### Error Tracking

Consider adding:

- Sentry
- LogRocket
- Datadog

---

## 💰 Cost Estimates

### Vercel Postgres

- Free: 256 MB storage, 60 hours compute
- Pro: $20/month + usage

### Neon

- Free: 0.5 GB storage, 1 project
- Pro: $19/month

### Vercel Hosting

- Hobby: Free (personal projects)
- Pro: $20/month (commercial)

---

## ✅ Final Checklist

Before going live:

- [ ] Database created and connected
- [ ] All environment variables set
- [ ] Migrations applied
- [ ] Admin user created
- [ ] Email configured and tested
- [ ] Build successful
- [ ] All pages load correctly
- [ ] Forms work (contact, reply)
- [ ] Admin dashboard accessible
- [ ] Analytics tracking works
- [ ] Error pages display correctly
- [ ] Mobile responsive
- [ ] Performance optimized
- [ ] Security reviewed
- [ ] Backups configured

---

## 🎉 You're Ready!

Your Trust Solutions website is now ready for production deployment on Vercel!

**Next Steps:**

1. Choose your database (Vercel Postgres recommended)
2. Update Prisma schema
3. Set environment variables
4. Deploy!

Need help? Check the troubleshooting section or Vercel documentation.
