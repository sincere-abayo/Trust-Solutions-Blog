# Vercel Deployment Checklist ✅

## Before Deployment

### 1. Code Preparation

- [x] Build passes locally (`npm run build`)
- [x] All TypeScript errors fixed
- [x] Prisma schema updated to PostgreSQL
- [x] Migration files created
- [x] Environment variables documented

### 2. Database Setup

- [ ] Choose database provider (Vercel Postgres recommended)
- [ ] Create database instance
- [ ] Copy connection strings
- [ ] Test connection locally (optional)

### 3. Environment Variables

- [ ] `DATABASE_URL` - PostgreSQL connection string (pooled)
- [ ] `DIRECT_URL` - PostgreSQL direct connection (for migrations)
- [ ] `EMAIL_USER` - Gmail address
- [ ] `EMAIL_PASS` - Gmail app password

### 4. Git Repository

- [ ] All changes committed
- [ ] `.env` files NOT committed (check .gitignore)
- [ ] Push to GitHub/GitLab/Bitbucket

## Deployment Steps

### 1. Create Vercel Project

- [ ] Go to https://vercel.com
- [ ] Click "Add New Project"
- [ ] Import your Git repository
- [ ] Select framework: Next.js

### 2. Configure Build Settings

- [ ] Build Command: `npm run build` (auto-detected)
- [ ] Output Directory: `.next` (auto-detected)
- [ ] Install Command: `npm install` (auto-detected)

### 3. Add Environment Variables

Go to Project Settings → Environment Variables:

```
DATABASE_URL = <your-postgres-prisma-url>
DIRECT_URL = <your-postgres-url-non-pooling>
EMAIL_USER = your-email@gmail.com
EMAIL_PASS = your-app-password
```

- [ ] All variables added
- [ ] Applied to Production, Preview, and Development

### 4. Deploy

- [ ] Click "Deploy"
- [ ] Wait for build to complete
- [ ] Check deployment logs for errors

## Post-Deployment

### 1. Verify Deployment

- [ ] Site loads correctly
- [ ] Homepage displays
- [ ] All service pages work
- [ ] Contact form loads
- [ ] About page displays
- [ ] Error pages work (test 404)

### 2. Create Admin User

Run this command with your production DATABASE_URL:

```bash
DATABASE_URL="<your-production-url>" npx tsx scripts/seed-production.ts admin YourSecurePassword
```

- [ ] Admin user created
- [ ] Password is secure (not default)
- [ ] Can login to admin dashboard

### 3. Test Admin Dashboard

- [ ] Can access `/admin/login`
- [ ] Can login with credentials
- [ ] Dashboard loads
- [ ] Can view messages
- [ ] Can send replies
- [ ] Can view analytics
- [ ] Can view reply history

### 4. Test Contact Form

- [ ] Form loads correctly
- [ ] Can submit message
- [ ] Confirmation email received
- [ ] Message appears in admin dashboard
- [ ] Admin notification email received

### 5. Test Reply Feature

- [ ] Can open message detail
- [ ] Can click "Send Reply Email"
- [ ] Reply modal opens
- [ ] Can compose reply
- [ ] Reply sends successfully
- [ ] Customer receives email
- [ ] Reply saved in database
- [ ] Can view reply history

### 6. Test Page Tracking

- [ ] Visit various pages
- [ ] Check admin analytics
- [ ] Page views are tracked
- [ ] Top pages display correctly

## Performance Checks

### 1. Speed

- [ ] Homepage loads < 3 seconds
- [ ] Service pages load quickly
- [ ] Admin dashboard responsive
- [ ] No console errors

### 2. Mobile

- [ ] Test on mobile device
- [ ] All pages responsive
- [ ] Forms work on mobile
- [ ] Navigation works
- [ ] Images load correctly

### 3. SEO

- [ ] Meta tags present
- [ ] Page titles correct
- [ ] Descriptions set
- [ ] Images have alt text
- [ ] 404 page works

## Security Checks

### 1. Environment Variables

- [ ] No secrets in code
- [ ] `.env` files in `.gitignore`
- [ ] Production variables set in Vercel
- [ ] Strong admin password

### 2. Admin Access

- [ ] Admin routes protected
- [ ] Session management works
- [ ] Logout works correctly
- [ ] Unauthorized access blocked

### 3. Email Security

- [ ] Using Gmail app password (not account password)
- [ ] Email credentials not exposed
- [ ] Email sending works

## Monitoring Setup

### 1. Vercel Analytics

- [ ] Enable Vercel Analytics
- [ ] Check dashboard for metrics

### 2. Error Tracking (Optional)

- [ ] Set up Sentry (optional)
- [ ] Configure error logging
- [ ] Test error reporting

### 3. Database Monitoring

- [ ] Check database dashboard
- [ ] Monitor connection pool
- [ ] Set up alerts (optional)

## Documentation

### 1. Update README

- [ ] Add deployment instructions
- [ ] Document environment variables
- [ ] Add admin credentials (securely)
- [ ] Include troubleshooting tips

### 2. Team Access

- [ ] Share admin credentials securely
- [ ] Document admin procedures
- [ ] Train team on dashboard

## Final Checks

### 1. Functionality

- [ ] All pages load
- [ ] All forms work
- [ ] All links work
- [ ] Images display
- [ ] Styles applied correctly

### 2. Content

- [ ] Company information correct
- [ ] Contact details accurate
- [ ] Service descriptions complete
- [ ] About page updated

### 3. Legal

- [ ] Privacy policy accessible
- [ ] Terms of service accessible
- [ ] Contact information visible
- [ ] Company details correct

## Backup Plan

### 1. Database Backup

- [ ] Enable automatic backups
- [ ] Test backup restoration
- [ ] Document backup procedure

### 2. Rollback Plan

- [ ] Know how to rollback deployment
- [ ] Keep previous version accessible
- [ ] Document rollback steps

## Launch!

### Pre-Launch

- [ ] All checklist items complete
- [ ] Team notified
- [ ] Monitoring active
- [ ] Backup configured

### Launch

- [ ] Make deployment live
- [ ] Monitor for issues
- [ ] Test critical paths
- [ ] Announce launch

### Post-Launch

- [ ] Monitor analytics
- [ ] Check error logs
- [ ] Respond to issues
- [ ] Gather feedback

## 🎉 Congratulations!

Your Trust Solutions website is now live on Vercel!

**Admin Dashboard:** https://your-site.vercel.app/admin/login

**Next Steps:**

1. Monitor performance
2. Respond to customer inquiries
3. Review analytics regularly
4. Keep dependencies updated
5. Backup database regularly

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Prisma Docs: https://www.prisma.io/docs
- Next.js Docs: https://nextjs.org/docs

Check `VERCEL_DEPLOYMENT_GUIDE.md` for detailed instructions.
