import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const username = process.argv[2] || 'admin';
  const password = process.argv[3] || 'admin123';
  
  // Hash password
  const passwordHash = await bcrypt.hash(password, 10);
  
  // Create or update admin
  const admin = await prisma.admin.upsert({
    where: { username },
    update: { passwordHash },
    create: {
      username,
      passwordHash
    }
  });
  
  console.log('✅ Admin user created/updated:');
  console.log(`   Username: ${admin.username}`);
  console.log(`   Password: ${password}`);
  console.log('\n🔐 Login at: http://localhost:3000/admin/login');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
