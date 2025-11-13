import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Testing database connection...\n');
  
  // Test connection
  await prisma.$connect();
  console.log('✅ Database connected successfully\n');
  
  // Count records
  const [messageCount, viewCount, adminCount] = await Promise.all([
    prisma.contactMessage.count(),
    prisma.pageView.count(),
    prisma.admin.count()
  ]);
  
  console.log('📊 Database Statistics:');
  console.log(`   Contact Messages: ${messageCount}`);
  console.log(`   Page Views: ${viewCount}`);
  console.log(`   Admin Users: ${adminCount}`);
  
  // List admins
  if (adminCount > 0) {
    const admins = await prisma.admin.findMany({
      select: { username: true, createdAt: true }
    });
    console.log('\n👤 Admin Users:');
    admins.forEach(admin => {
      console.log(`   - ${admin.username} (created: ${admin.createdAt.toLocaleDateString()})`);
    });
  }
  
  // Recent messages
  if (messageCount > 0) {
    const recentMessages = await prisma.contactMessage.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        name: true,
        email: true,
        service: true,
        status: true,
        createdAt: true
      }
    });
    console.log('\n📧 Recent Messages:');
    recentMessages.forEach(msg => {
      console.log(`   - ${msg.name} (${msg.service}) - ${msg.status}`);
    });
  }
  
  console.log('\n✅ Database test completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
