# Authentication System Setup Guide

This guide will help you set up the complete authentication system with JWT tokens, email verification, and password reset functionality.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Email service (Gmail, SendGrid, etc.)

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Environment Configuration

1. Copy the example environment file:
```bash
cp env.example .env
```

2. Edit `.env` with your configuration:

### Database Configuration
```env
MONGODB_URI=mongodb://localhost:27017/swagger-nest-node-mongo
```

### JWT Configuration
```env
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_REFRESH_SECRET=your-super-secret-refresh-jwt-key-change-this-in-production
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
JWT_ID_EXPIRES_IN=1h
```

### Email Configuration (Gmail Example)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@yourapp.com
```

### Frontend Configuration
```env
FRONTEND_URL=http://localhost:3000
```

## Step 3: Email Service Setup

### Gmail Setup (Recommended for Development)

1. **Enable 2-Factor Authentication**
   - Go to your Google Account settings
   - Navigate to Security → 2-Step Verification
   - Enable 2-factor authentication

2. **Generate App Password**
   - Go to Security → 2-Step Verification → App passwords
   - Select "Mail" as the app
   - Generate the password
   - Use this password in `SMTP_PASS`

3. **Alternative: Use Gmail with "Less Secure Apps"**
   - Go to Google Account settings
   - Security → Less secure app access
   - Turn on "Allow less secure apps"
   - Use your regular Gmail password

### Other Email Providers

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

#### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

## Step 4: Start the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

## Step 5: Test the System

### Option 1: Automated Test
```bash
node test-auth.js
```

### Option 2: Manual Testing with Swagger UI
1. Open your browser and go to: `http://localhost:3000/api`
2. Test the endpoints in this order:

#### 1. Create a User
- Endpoint: `POST /users`
- Body:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "userName": "johndoe123",
  "email": "your-email@example.com",
  "phone": "+1234567890",
  "gender": "MALE",
  "address": "123 Main St, City, State 12345",
  "password": "password123",
  "confirmPassword": "password123"
}
```

#### 2. Check Email Verification
- Check your email for the verification link
- Click the link or copy the token

#### 3. Verify Email
- Endpoint: `POST /auth/verify-email`
- Body:
```json
{
  "token": "your-verification-token"
}
```

#### 4. Login
- Endpoint: `POST /auth/login`
- Body:
```json
{
  "email": "your-email@example.com",
  "password": "password123"
}
```

#### 5. Test Protected Endpoints
- Use the access token from login response
- Add to Authorization header: `Bearer <access-token>`
- Test: `GET /auth/profile`

## Step 6: Password Reset Flow

### 1. Request Password Reset
- Endpoint: `POST /auth/forgot-password`
- Body:
```json
{
  "email": "your-email@example.com"
}
```

### 2. Check Email for Reset Link
- Look for password reset email
- Copy the reset token

### 3. Reset Password
- Endpoint: `POST /auth/reset-password`
- Body:
```json
{
  "token": "your-reset-token",
  "newPassword": "newpassword123"
}
```

## Troubleshooting

### Common Issues

#### 1. Email Not Sending
- Check SMTP configuration in `.env`
- Verify email credentials
- Check firewall/network settings
- For Gmail: Ensure 2FA is enabled and app password is used

#### 2. MongoDB Connection Issues
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify database permissions

#### 3. JWT Token Issues
- Ensure JWT secrets are set in `.env`
- Check token expiration settings
- Verify token format in Authorization header

#### 4. Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check TypeScript version compatibility
- Ensure all dependencies are installed

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
DEBUG=*
```

### Logs

Check application logs for detailed error information:
```bash
npm run start:dev
```

## Security Considerations

### Production Deployment

1. **Environment Variables**
   - Use strong, unique JWT secrets
   - Store secrets in environment variables, not in code
   - Use different secrets for different environments

2. **Database Security**
   - Use MongoDB authentication
   - Restrict database access
   - Regular backups

3. **Email Security**
   - Use dedicated email service (SendGrid, Mailgun)
   - Implement rate limiting
   - Monitor email delivery

4. **API Security**
   - Enable HTTPS
   - Implement rate limiting
   - Add request validation
   - Use CORS properly

5. **Token Security**
   - Short-lived access tokens (15 minutes)
   - Secure refresh token storage
   - Token rotation on refresh
   - Logout invalidates tokens

## API Documentation

Once running, visit `http://localhost:3000/api` for interactive API documentation.

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review the logs
3. Test with the provided test script
4. Check the Swagger documentation
