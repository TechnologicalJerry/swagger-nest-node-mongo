<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# NestJS Authentication API with JWT

A comprehensive authentication system built with NestJS, MongoDB, and JWT tokens. This API includes user registration, login, email verification, password reset, and token management.

## Features

- **User Authentication**: Login with email and password
- **JWT Tokens**: Access, Refresh, and ID tokens
- **Email Verification**: Automatic email verification on registration
- **Password Reset**: Forgot password and reset password functionality
- **Token Management**: Refresh token rotation and logout
- **Security**: Password hashing with bcrypt, secure token storage
- **API Documentation**: Swagger/OpenAPI documentation
- **Email Integration**: Nodemailer for sending emails

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Email service (Gmail, SendGrid, etc.)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd swagger-nest-node-mongo
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp env.example .env
```

4. Configure environment variables in `.env`:
```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/swagger-nest-node-mongo

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_REFRESH_SECRET=your-super-secret-refresh-jwt-key-change-this-in-production
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
JWT_ID_EXPIRES_IN=1h

# Email Configuration (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@yourapp.com

# Frontend URL for email links
FRONTEND_URL=http://localhost:3000

# Application Configuration
PORT=3000
NODE_ENV=development
```

## Email Setup

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Use the generated password in `SMTP_PASS`

### Other Email Providers
Update the SMTP settings in `.env` according to your email provider's configuration.

## Running the Application

### Development
```bash
npm run start:dev
```

### Production
```bash
npm run build
npm run start:prod
```

## API Documentation

Once the application is running, visit:
- Swagger UI: `http://localhost:3000/api`

## API Endpoints

### Authentication Endpoints

#### POST `/auth/login`
User login with email and password.
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### POST `/auth/refresh`
Refresh access token using refresh token.
```json
{
  "refreshToken": "your-refresh-token"
}
```

#### POST `/auth/logout`
Logout user and invalidate refresh token.
```json
{
  "refreshToken": "your-refresh-token"
}
```

#### POST `/auth/forgot-password`
Request password reset email.
```json
{
  "email": "user@example.com"
}
```

#### POST `/auth/reset-password`
Reset password using reset token.
```json
{
  "token": "reset-token",
  "newPassword": "newpassword123"
}
```

#### POST `/auth/verify-email`
Verify email address using verification token.
```json
{
  "token": "verification-token"
}
```

#### POST `/auth/resend-verification/:email`
Resend email verification.
```
POST /auth/resend-verification/user@example.com
```

#### GET `/auth/profile`
Get user profile (requires authentication).

### User Management Endpoints

#### POST `/users`
Create new user (automatically sends verification email).
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "userName": "johndoe123",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "gender": "MALE",
  "address": "123 Main St, City, State 12345",
  "password": "password123",
  "confirmPassword": "password123"
}
```

#### GET `/users`
Get all users (requires authentication).

#### GET `/users/:id`
Get user by ID (requires authentication).

#### PATCH `/users/:id`
Update user (requires authentication).

#### DELETE `/users/:id`
Delete user (requires authentication).

## Authentication Flow

1. **Registration**: User registers → Verification email sent → User verifies email
2. **Login**: User logs in → Receives access, refresh, and ID tokens
3. **API Access**: Use access token in Authorization header: `Bearer <access-token>`
4. **Token Refresh**: Use refresh token to get new access token
5. **Logout**: Invalidate refresh token

## Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication
- **Token Rotation**: Refresh tokens are rotated on each use
- **Email Verification**: Required before login
- **Password Reset**: Secure token-based password reset
- **Token Expiration**: Configurable token lifetimes
- **Rate Limiting**: Built-in protection against brute force

## Token Types

### Access Token
- Short-lived (15 minutes by default)
- Used for API authentication
- Contains user identity information

### Refresh Token
- Long-lived (7 days by default)
- Used to obtain new access tokens
- Stored securely in database
- Rotated on each use

### ID Token
- Medium-lived (1 hour by default)
- Contains user profile information
- Used for client-side user identification

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Invalid credentials or missing token
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Testing

Run the test suite:
```bash
npm run test
```

Run e2e tests:
```bash
npm run test:e2e
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/swagger-nest-node-mongo` |
| `JWT_SECRET` | JWT signing secret | Required |
| `JWT_REFRESH_SECRET` | JWT refresh token secret | Required |
| `JWT_ACCESS_EXPIRES_IN` | Access token expiration | `15m` |
| `JWT_REFRESH_EXPIRES_IN` | Refresh token expiration | `7d` |
| `JWT_ID_EXPIRES_IN` | ID token expiration | `1h` |
| `SMTP_HOST` | SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | SMTP username | Required |
| `SMTP_PASS` | SMTP password | Required |
| `SMTP_FROM` | From email address | `noreply@yourapp.com` |
| `FRONTEND_URL` | Frontend URL for email links | `http://localhost:3000` |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License.
