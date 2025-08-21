const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function testAuth() {
  try {
    console.log('🚀 Testing Authentication System...\n');

    // Test 1: Create a new user
    console.log('1. Creating a new user...');
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      userName: 'johndoe123',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      gender: 'MALE',
      address: '123 Main St, City, State 12345',
      password: 'password123',
      confirmPassword: 'password123'
    };

    try {
      const createResponse = await axios.post(`${BASE_URL}/users`, userData);
      console.log('✅ User created successfully:', createResponse.data._id);
    } catch (error) {
      if (error.response?.status === 400 && error.response?.data?.message?.includes('already exists')) {
        console.log('ℹ️  User already exists, continuing with login test...');
      } else {
        console.log('❌ Error creating user:', error.response?.data || error.message);
      }
    }

    // Test 2: Try to login (should fail without email verification)
    console.log('\n2. Testing login without email verification...');
    try {
      const loginData = {
        email: 'john.doe@example.com',
        password: 'password123'
      };
      await axios.post(`${BASE_URL}/auth/login`, loginData);
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('✅ Login correctly blocked without email verification');
      } else {
        console.log('❌ Unexpected error during login:', error.response?.data || error.message);
      }
    }

    // Test 3: Test forgot password
    console.log('\n3. Testing forgot password...');
    try {
      const forgotPasswordData = {
        email: 'john.doe@example.com'
      };
      const forgotResponse = await axios.post(`${BASE_URL}/auth/forgot-password`, forgotPasswordData);
      console.log('✅ Forgot password request sent:', forgotResponse.data.message);
    } catch (error) {
      console.log('❌ Error with forgot password:', error.response?.data || error.message);
    }

    // Test 4: Test resend verification email
    console.log('\n4. Testing resend verification email...');
    try {
      const resendResponse = await axios.post(`${BASE_URL}/auth/resend-verification/john.doe@example.com`);
      console.log('✅ Verification email resent:', resendResponse.data.message);
    } catch (error) {
      console.log('❌ Error resending verification email:', error.response?.data || error.message);
    }

    console.log('\n🎉 Authentication system test completed!');
    console.log('\n📝 Next steps:');
    console.log('1. Check your email for verification link');
    console.log('2. Verify your email address');
    console.log('3. Try logging in again');
    console.log('4. Test the other endpoints with proper authentication');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Check if axios is available
try {
  require.resolve('axios');
  testAuth();
} catch (error) {
  console.log('📦 Installing axios for testing...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install axios', { stdio: 'inherit' });
    console.log('✅ Axios installed successfully!');
    testAuth();
  } catch (installError) {
    console.error('❌ Failed to install axios:', installError.message);
    console.log('\n📝 Manual testing instructions:');
    console.log('1. Start the server: npm run start:dev');
    console.log('2. Visit: http://localhost:3000/api');
    console.log('3. Test the endpoints using Swagger UI');
  }
}
