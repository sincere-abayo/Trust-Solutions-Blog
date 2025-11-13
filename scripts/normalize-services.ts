import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔧 Normalizing service names in database...\n');
  
  // Service name mapping
  const serviceMap: Record<string, string> = {
    'it-consulting': 'IT Consulting',
    'real-estate': 'Real Estate',
    'digital-marketing': 'Digital Marketing',
    'events': 'Event Planning',
    'business': 'Business Consulting',
    'general': 'General Inquiry',
  };
  
  // Get all messages
  const messages = await prisma.contactMessage.findMany();
  
  console.log(`Found ${messages.length} messages to check\n`);
  
  let updatedCount = 0;
  
  for (const message of messages) {
    const normalizedService = serviceMap[message.service] || message.service;
    
    if (normalizedService !== message.service) {
      await prisma.contactMessage.update({
        where: { id: message.id },
        data: { service: normalizedService }
      });
      
      console.log(`✅ Updated: "${message.service}" → "${normalizedService}"`);
      updatedCount++;
    }
  }
  
  if (updatedCount === 0) {
    console.log('✅ All service names are already normalized!');
  } else {
    console.log(`\n✅ Updated ${updatedCount} message(s)`);
  }
  
  // Show final breakdown
  const serviceBreakdown = await prisma.contactMessage.groupBy({
    by: ['service'],
    _count: true,
    orderBy: {
      _count: {
        service: 'desc'
      }
    }
  });
  
  console.log('\n📊 Final Service Breakdown:');
  serviceBreakdown.forEach(item => {
    console.log(`   - ${item.service}: ${item._count}`);
  });
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
