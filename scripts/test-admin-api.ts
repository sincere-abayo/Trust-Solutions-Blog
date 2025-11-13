// Test script for admin dashboard API endpoints
const BASE_URL = 'http://localhost:3001';

interface TestResult {
  name: string;
  passed: boolean;
  message: string;
}

const results: TestResult[] = [];

async function test(name: string, fn: () => Promise<void>) {
  try {
    await fn();
    results.push({ name, passed: true, message: 'Passed' });
    console.log(`✅ ${name}`);
  } catch (error) {
    results.push({ 
      name, 
      passed: false, 
      message: error instanceof Error ? error.message : String(error) 
    });
    console.log(`❌ ${name}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function main() {
  console.log('🧪 Testing Admin Dashboard API\n');
  console.log('=' .repeat(60));
  
  let sessionCookie = '';
  
  // Test 1: Login with invalid credentials
  await test('Login with invalid credentials should fail', async () => {
    const response = await fetch(`${BASE_URL}/api/admin/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'wrong', password: 'wrong' })
    });
    
    if (response.status !== 401) {
      throw new Error(`Expected 401, got ${response.status}`);
    }
  });
  
  // Test 2: Login with valid credentials
  await test('Login with valid credentials should succeed', async () => {
    const response = await fetch(`${BASE_URL}/api/admin/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', password: 'admin123' })
    });
    
    if (!response.ok) {
      throw new Error(`Login failed with status ${response.status}`);
    }
    
    const cookies = response.headers.get('set-cookie');
    if (!cookies || !cookies.includes('admin-session')) {
      throw new Error('No session cookie set');
    }
    
    sessionCookie = cookies.split(';')[0];
  });
  
  // Test 3: Access messages without authentication
  await test('Access messages without auth should fail', async () => {
    const response = await fetch(`${BASE_URL}/api/admin/messages`);
    
    if (response.status !== 401) {
      throw new Error(`Expected 401, got ${response.status}`);
    }
  });
  
  // Test 4: Access messages with authentication
  await test('Access messages with auth should succeed', async () => {
    const response = await fetch(`${BASE_URL}/api/admin/messages`, {
      headers: { 'Cookie': sessionCookie }
    });
    
    if (!response.ok) {
      throw new Error(`Failed with status ${response.status}`);
    }
    
    const data = await response.json();
    if (!Array.isArray(data.messages)) {
      throw new Error('Response should contain messages array');
    }
    
    console.log(`   Found ${data.messages.length} messages`);
  });
  
  // Test 5: Filter messages by status
  await test('Filter messages by status', async () => {
    const response = await fetch(`${BASE_URL}/api/admin/messages?status=new`, {
      headers: { 'Cookie': sessionCookie }
    });
    
    if (!response.ok) {
      throw new Error(`Failed with status ${response.status}`);
    }
    
    const data = await response.json();
    const allNew = data.messages.every((m: any) => m.status === 'new');
    
    if (!allNew) {
      throw new Error('Not all messages have status "new"');
    }
    
    console.log(`   Found ${data.messages.length} new messages`);
  });
  
  // Test 6: Update message status
  await test('Update message status', async () => {
    // First get a message
    const listResponse = await fetch(`${BASE_URL}/api/admin/messages`, {
      headers: { 'Cookie': sessionCookie }
    });
    const listData = await listResponse.json();
    
    if (listData.messages.length === 0) {
      throw new Error('No messages to update');
    }
    
    const messageId = listData.messages[0].id;
    
    // Update it
    const updateResponse = await fetch(`${BASE_URL}/api/admin/messages`, {
      method: 'PATCH',
      headers: { 
        'Cookie': sessionCookie,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: messageId, status: 'read' })
    });
    
    if (!updateResponse.ok) {
      throw new Error(`Update failed with status ${updateResponse.status}`);
    }
    
    const updateData = await updateResponse.json();
    if (updateData.message.status !== 'read') {
      throw new Error('Status was not updated');
    }
    
    console.log(`   Updated message ${messageId} to "read"`);
  });
  
  // Test 7: Access analytics without authentication
  await test('Access analytics without auth should fail', async () => {
    const response = await fetch(`${BASE_URL}/api/admin/analytics`);
    
    if (response.status !== 401) {
      throw new Error(`Expected 401, got ${response.status}`);
    }
  });
  
  // Test 8: Access analytics with authentication
  await test('Access analytics with auth should succeed', async () => {
    const response = await fetch(`${BASE_URL}/api/admin/analytics`, {
      headers: { 'Cookie': sessionCookie }
    });
    
    if (!response.ok) {
      throw new Error(`Failed with status ${response.status}`);
    }
    
    const data = await response.json();
    
    const requiredFields = [
      'totalMessages',
      'newMessages',
      'totalViews',
      'viewsLast7Days',
      'viewsToday',
      'topPages',
      'messagesByService'
    ];
    
    for (const field of requiredFields) {
      if (!(field in data)) {
        throw new Error(`Missing field: ${field}`);
      }
    }
    
    console.log(`   Total Messages: ${data.totalMessages}`);
    console.log(`   New Messages: ${data.newMessages}`);
    console.log(`   Total Views: ${data.totalViews}`);
    console.log(`   Views (7 days): ${data.viewsLast7Days}`);
    console.log(`   Views (today): ${data.viewsToday}`);
    console.log(`   Top Pages: ${data.topPages.length}`);
  });
  
  // Test 9: Logout
  await test('Logout should clear session', async () => {
    const response = await fetch(`${BASE_URL}/api/admin/auth`, {
      method: 'DELETE',
      headers: { 'Cookie': sessionCookie }
    });
    
    if (!response.ok) {
      throw new Error(`Logout failed with status ${response.status}`);
    }
    
    // Get the cleared cookie
    const cookies = response.headers.get('set-cookie');
    if (cookies) {
      sessionCookie = cookies.split(';')[0];
    }
  });
  
  // Test 10: Access after logout should fail
  await test('Access after logout should fail', async () => {
    const response = await fetch(`${BASE_URL}/api/admin/messages`, {
      headers: { 'Cookie': sessionCookie }
    });
    
    if (response.status !== 401) {
      throw new Error(`Expected 401, got ${response.status}`);
    }
  });
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 Test Summary:');
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;
  
  console.log(`   Total: ${results.length}`);
  console.log(`   Passed: ${passed}`);
  console.log(`   Failed: ${failed}`);
  
  if (failed > 0) {
    console.log('\n❌ Failed Tests:');
    results.filter(r => !r.passed).forEach(r => {
      console.log(`   - ${r.name}: ${r.message}`);
    });
    process.exit(1);
  } else {
    console.log('\n✅ All tests passed!');
  }
}

main().catch(console.error);
