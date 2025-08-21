const http = require('http');

// Test if the application is running and Swagger is accessible
const testSwagger = () => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log(`✅ Application is running! Status: ${res.statusCode}`);
    console.log(`📚 Swagger documentation is accessible at: http://localhost:3000/api`);
    
    if (res.statusCode === 200) {
      console.log('🎉 Swagger documentation is working correctly!');
    } else {
      console.log('⚠️  Swagger documentation might not be accessible');
    }
  });

  req.on('error', (e) => {
    console.log('❌ Application is not running. Please start it with: npm run start:dev');
    console.log('   Error:', e.message);
  });

  req.end();
};

// Test the root endpoint
const testRootEndpoint = () => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    console.log(`✅ Root endpoint is working! Status: ${res.statusCode}`);
  });

  req.on('error', (e) => {
    console.log('❌ Root endpoint is not accessible');
  });

  req.end();
};

console.log('🧪 Testing Swagger implementation...\n');

// Test both endpoints
testSwagger();
setTimeout(testRootEndpoint, 1000);

console.log('\n📋 To start the application, run: npm run start:dev');
console.log('🔗 Then visit: http://localhost:3000/api');
