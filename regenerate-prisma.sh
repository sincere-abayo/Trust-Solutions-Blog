#!/bin/bash
echo "🔧 Regenerating Prisma Client for PostgreSQL..."

# Set a temporary DATABASE_URL for generation
export DATABASE_URL="postgres://9200cb6303818a8bb52daa4b28a85ac3aa304f335258aef95edc16c32fbfdce6:sk_4AP6vOGEOen9AwHOFIE6e@db.prisma.io:5432/postgres?sslmode=require"

# Generate Prisma Client
npx prisma generate

echo "✅ Prisma Client regenerated!"
echo ""
echo "Now you can run the seed script:"
echo 'DATABASE_URL="postgres://9200cb6303818a8bb52daa4b28a85ac3aa304f335258aef95edc16c32fbfdce6:sk_4AP6vOGEOen9AwHOFIE6e@db.prisma.io:5432/postgres?sslmode=require" npx tsx scripts/seed-production.ts admin YourSecurePassword123'
