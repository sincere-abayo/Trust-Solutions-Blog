#!/bin/bash
echo "🔐 Change Admin Password"
echo ""

# Check if password is provided
if [ -z "$1" ]; then
    echo "Usage: ./change-password.sh <new-password>"
    echo ""
    echo "Example:"
    echo "  ./change-password.sh MyNewSecurePassword123!"
    exit 1
fi

NEW_PASSWORD="$1"

# Set environment variables
export DATABASE_URL="postgres://9200cb6303818a8bb52daa4b28a85ac3aa304f335258aef95edc16c32fbfdce6:sk_4AP6vOGEOen9AwHOFIE6e@db.prisma.io:5432/postgres?sslmode=require"
export DIRECT_URL="postgres://9200cb6303818a8bb52daa4b28a85ac3aa304f335258aef95edc16c32fbfdce6:sk_4AP6vOGEOen9AwHOFIE6e@db.prisma.io:5432/postgres?sslmode=require"

# Change password
npx tsx scripts/change-admin-password.ts admin "$NEW_PASSWORD"

echo ""
echo "✅ Done! You can now login with:"
echo "   Username: admin"
echo "   Password: $NEW_PASSWORD"
