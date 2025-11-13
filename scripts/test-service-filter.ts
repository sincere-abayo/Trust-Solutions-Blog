// Test script for service filter functionality
const BASE_URL = 'http://localhost:3000';

async function login() {
  const response = await fetch(`${BASE_URL}/api/admin/auth`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'admin', password: 'admin123' })
  });
  
  const cookies = response.headers.get('set-cookie');
  return cookies ? cookies.split(';')[0] : '';
}

async function testServiceFilter() {
  console.log('🧪 Testing Service Filter Functionality\n');
  console.log('='.repeat(60));
  
  // Login first
  console.log('\n1. Logging in...');
  const sessionCookie = await login();
  console.log('✅ Logged in successfully\n');
  
  // Test 1: Get all messages
  console.log('2. Fetching all messages...');
  const allResponse = await fetch(`${BASE_URL}/api/admin/messages`, {
    headers: { 'Cookie': sessionCookie }
  });
  
  if (!allResponse.ok) {
    console.error(`❌ Failed to fetch messages: ${allResponse.status}`);
    return;
  }
  
  const allData = await allResponse.json();
  
  if (!allData.messages) {
    console.error('❌ No messages in response:', allData);
    return;
  }
  
  console.log(`✅ Found ${allData.messages.length} total messages\n`);
  
  // Show services breakdown
  const serviceCount: Record<string, number> = {};
  allData.messages.forEach((msg: any) => {
    serviceCount[msg.service] = (serviceCount[msg.service] || 0) + 1;
  });
  
  console.log('📊 Messages by Service:');
  Object.entries(serviceCount).forEach(([service, count]) => {
    console.log(`   - ${service}: ${count}`);
  });
  
  // Test 2: Filter by specific service
  console.log('\n3. Testing service filter...');
  const testService = 'IT Consulting';
  const filterResponse = await fetch(
    `${BASE_URL}/api/admin/messages?service=${encodeURIComponent(testService)}`,
    { headers: { 'Cookie': sessionCookie } }
  );
  const filterData = await filterResponse.json();
  
  console.log(`✅ Filter by "${testService}": ${filterData.messages.length} messages`);
  
  // Verify all returned messages match the filter
  const allMatch = filterData.messages.every((msg: any) => msg.service === testService);
  if (allMatch) {
    console.log('✅ All filtered messages match the service');
  } else {
    console.log('❌ Some messages do not match the filter');
  }
  
  // Test 3: Combined filters (status + service)
  console.log('\n4. Testing combined filters (status + service)...');
  const combinedResponse = await fetch(
    `${BASE_URL}/api/admin/messages?status=new&service=${encodeURIComponent(testService)}`,
    { headers: { 'Cookie': sessionCookie } }
  );
  const combinedData = await combinedResponse.json();
  
  console.log(`✅ New messages for "${testService}": ${combinedData.messages.length}`);
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ Service filter test completed!\n');
}

testServiceFilter().catch(console.error);
