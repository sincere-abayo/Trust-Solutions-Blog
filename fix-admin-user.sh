#!/bin/bash
echo "🔧 Fixing admin user..."
echo ""

# Set environment variables
export DATABASE_URL="postgres://9200cb6303818a8bb52daa4b28a85ac3aa304f335258aef95edc16c32fbfdce6:sk_4AP6vOGEOen9AwHOFIE6e@db.prisma.io:5432/postgres?sslmode=require"
export DIRECT_URL="postgres://9200cb6303818a8bb52daa4b28a85ac3aa304f335258aef95edc16c32fbfdce6:sk_4AP6vOGEOen9AwHOFIE6e@db.prisma.io:5432/postgres?sslmode=require"

echo "1️⃣ Checking current admin users..."
npx tsx -e "
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function check() {
  const admins = await prisma.admin.findMany();
  console.log('Current admin users:');
  admins.forEach(admin => {
    console.log(\`  - Username: '\${admin.username}' (length: \${admin.username.length})\`);
  });
  await prisma.\$disconnect();
}
check();
"

echo ""
echo "2️⃣ Deleting all admin users..."
npx tsx -e "
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function deleteAll() {
  await prisma.admin.deleteMany({});
  console.log('✅ All admin users deleted');
  await prisma.\$disconnect();
}
deleteAll();
"

echo ""
echo "3️⃣ Creating new admin user (without spaces)..."
npx tsx scripts/seed-production.ts admin TrustSolutions2025!

echo ""
echo "✅ Admin user fixed!"
echo ""
echo "Try logging in again with:"
echo "  Username: admin"
echo "  Password: TrustSolutions2025!"
