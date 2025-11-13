import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding test data...\n');
  
  // Create test contact messages
  const messages = await Promise.all([
    prisma.contactMessage.create({
      data: {
        name: 'John Smith',
        email: 'john.smith@example.com',
        phone: '+1-555-0101',
        company: 'Tech Corp',
        service: 'IT Consulting',
        message: 'We need help with our cloud infrastructure migration. Looking for expert guidance on AWS setup.',
        status: 'new'
      }
    }),
    prisma.contactMessage.create({
      data: {
        name: 'Sarah Johnson',
        email: 'sarah.j@realestate.com',
        phone: '+1-555-0102',
        company: 'Prime Properties',
        service: 'Real Estate',
        message: 'Interested in property management services for our commercial portfolio.',
        status: 'new'
      }
    }),
    prisma.contactMessage.create({
      data: {
        name: 'Michael Chen',
        email: 'mchen@startup.io',
        phone: '+1-555-0103',
        company: 'StartupXYZ',
        service: 'Digital Marketing',
        message: 'Looking for comprehensive digital marketing strategy for our product launch.',
        status: 'read'
      }
    }),
    prisma.contactMessage.create({
      data: {
        name: 'Emily Davis',
        email: 'emily.davis@events.com',
        phone: '+1-555-0104',
        company: 'EventPro',
        service: 'Events Management',
        message: 'Need event planning services for our annual conference with 500+ attendees.',
        status: 'replied'
      }
    }),
    prisma.contactMessage.create({
      data: {
        name: 'Robert Wilson',
        email: 'rwilson@business.com',
        phone: '+1-555-0105',
        company: 'Wilson Enterprises',
        service: 'Business Consulting',
        message: 'Seeking strategic business consulting for expansion into new markets.',
        status: 'new'
      }
    })
  ]);
  
  console.log(`✅ Created ${messages.length} test contact messages`);
  
  // Create test page views
  const pages = [
    '/',
    '/about',
    '/contact',
    '/category/it-consulting',
    '/category/real-estate',
    '/category/digital-marketing',
    '/category/events',
    '/category/business'
  ];
  
  const viewsToCreate = [];
  const now = new Date();
  
  // Create views for the last 30 days
  for (let i = 0; i < 30; i++) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    const viewsPerDay = Math.floor(Math.random() * 50) + 10;
    
    for (let j = 0; j < viewsPerDay; j++) {
      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      viewsToCreate.push({
        path: randomPage,
        userAgent: 'Mozilla/5.0 (Test Browser)',
        referer: 'https://google.com',
        createdAt: date
      });
    }
  }
  
  await prisma.pageView.createMany({
    data: viewsToCreate
  });
  
  console.log(`✅ Created ${viewsToCreate.length} test page views`);
  
  // Show summary
  const stats = await Promise.all([
    prisma.contactMessage.count(),
    prisma.pageView.count(),
    prisma.contactMessage.count({ where: { status: 'new' } })
  ]);
  
  console.log('\n📊 Database Summary:');
  console.log(`   Total Messages: ${stats[0]}`);
  console.log(`   Total Page Views: ${stats[1]}`);
  console.log(`   New Messages: ${stats[2]}`);
  console.log('\n✅ Test data seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
