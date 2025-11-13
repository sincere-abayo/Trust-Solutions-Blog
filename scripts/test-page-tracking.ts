// Test script for page view tracking
const BASE_URL = 'http://localhost:3000';

async function testPageTracking() {
  console.log('🧪 Testing Page View Tracking\n');
  console.log('='.repeat(60));
  
  // Get initial count
  console.log('\n1. Getting initial page view count...');
  const initialResponse = await fetch(`${BASE_URL}/api/admin/analytics`, {
    headers: {
      'Cookie': await getAdminSession()
    }
  });
  const initialData = await initialResponse.json();
  const initialCount = initialData.totalViews;
  console.log(`✅ Initial page views: ${initialCount}`);
  
  // Track some page views
  console.log('\n2. Tracking test page views...');
  const testPages = [
    '/',
    '/about',
    '/contact',
    '/category/it-consulting',
    '/category/real-estate'
  ];
  
  for (const page of testPages) {
    const response = await fetch(`${BASE_URL}/api/track-view`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: page })
    });
    
    if (response.ok) {
      console.log(`   ✅ Tracked: ${page}`);
    } else {
      console.log(`   ❌ Failed: ${page}`);
    }
  }
  
  // Wait a moment for database to update
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Get updated count
  console.log('\n3. Getting updated page view count...');
  const updatedResponse = await fetch(`${BASE_URL}/api/admin/analytics`, {
    headers: {
      'Cookie': await getAdminSession()
    }
  });
  const updatedData = await updatedResponse.json();
  const updatedCount = updatedData.totalViews;
  const newViews = updatedCount - initialCount;
  
  console.log(`✅ Updated page views: ${updatedCount}`);
  console.log(`✅ New views tracked: ${newViews}`);
  
  // Show top pages
  console.log('\n4. Top Pages:');
  updatedData.topPages.slice(0, 5).forEach((page: any, index: number) => {
    console.log(`   ${index + 1}. ${page.path} - ${page.views} views`);
  });
  
  console.log('\n' + '='.repeat(60));
  
  if (newViews === testPages.length) {
    console.log('✅ Page tracking test PASSED!');
  } else {
    console.log(`⚠️  Expected ${testPages.length} new views, got ${newViews}`);
  }
}

async function getAdminSession(): Promise<string> {
  const response = await fetch(`${BASE_URL}/api/admin/auth`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'admin', password: 'admin123' })
  });
  
  const cookies = response.headers.get('set-cookie');
  return cookies ? cookies.split(';')[0] : '';
}

testPageTracking().catch(console.error);
