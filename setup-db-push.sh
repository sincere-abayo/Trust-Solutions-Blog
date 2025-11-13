#!/bin/bash
echo "🚀 Setting up Production Database (using db push)..."
echo ""

# Set environment variables
export DATABASE_URL="postgres://9200cb6303818a8bb52daa4b28a85ac3aa304f335258aef95edc16c32fbfdce6:sk_4AP6vOGEOen9AwHOFIE6e@db.prisma.io:5432/postgres?sslmode=require"
export DIRECT_URL="postgres://9200cb6303818a8bb52daa4b28a85ac3aa304f335258aef95edc16c32fbfdce6:sk_4AP6vOGEOen9AwHOFIE6e@db.prisma.io:5432/postgres?sslmode=require"

echo "1️⃣ Pushing schema to database..."
npx prisma db push --accept-data-loss

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Schema pushed successfully!"
    echo ""
    echo "2️⃣ Creating admin user..."
    npx tsx scripts/seed-production.ts admin TrustSolutions2025!
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 SUCCESS! Your production database is ready!"
        echo ""
        echo "📝 Admin Credentials:"
        echo "   Username: admin"
        echo "   Password: TrustSolutions2025!"
        echo ""
        echo "🌐 Access your admin dashboard at:"
        echo "   https://your-project.vercel.app/admin/login"
        echo ""
        echo "⚠️  IMPORTANT: Change the password after first login!"
    else
        echo ""
        echo "❌ Failed to create admin user"
    fi
else
    echo ""
    echo "❌ Schema push failed"
    echo ""
    echo "💡 This might happen if:"
    echo "   - Database is still initializing (wait a few minutes)"
    echo "   - Connection credentials are incorrect"
    echo "   - Database is not accessible from your location"
fi
