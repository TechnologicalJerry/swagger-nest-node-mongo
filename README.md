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

# User Management API with Swagger Documentation

A comprehensive RESTful API for managing users with MongoDB, featuring complete Swagger documentation.

## 🚀 Features

- **User CRUD Operations**: Create, Read, Update, and Delete users
- **Data Validation**: Comprehensive input validation using class-validator
- **MongoDB Integration**: Mongoose ODM for database operations
- **Swagger Documentation**: Complete API documentation with interactive UI
- **TypeScript**: Full type safety and IntelliSense support
- **NestJS Framework**: Modern, scalable Node.js framework

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd swagger-nest-node-mongo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (create a `.env` file):
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/user-management
```

4. Start the development server:
```bash
npm run start:dev
```

## 📚 API Documentation

Once the application is running, you can access the Swagger documentation at:

**http://localhost:3000/api**

### Swagger UI Features

- **Interactive Documentation**: Test API endpoints directly from the browser
- **Request/Response Examples**: Pre-filled examples for all endpoints
- **Schema Validation**: Automatic validation of request/response schemas
- **Authentication Support**: Ready for future authentication implementation
- **Export Options**: Export OpenAPI specification in various formats

## 🔗 API Endpoints

### Application Status
- `GET /` - Get application status

### User Management
- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## 📖 API Usage Examples

### Create a User
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "userName": "johndoe123",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "gender": "male",
    "address": "123 Main St, City, State 12345",
    "password": "password123",
    "confirmPassword": "password123"
  }'
```

### Get All Users
```bash
curl -X GET http://localhost:3000/users
```

### Get User by ID
```bash
curl -X GET http://localhost:3000/users/507f1f77bcf86cd799439011
```

### Update User
```bash
curl -X PATCH http://localhost:3000/users/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "email": "jane.doe@example.com"
  }'
```

### Delete User
```bash
curl -X DELETE http://localhost:3000/users/507f1f77bcf86cd799439011
```

## 🏗️ Project Structure

```
src/
├── app.controller.ts          # Main application controller
├── app.module.ts             # Root application module
├── app.service.ts            # Application service
├── main.ts                   # Application bootstrap
└── users/
    ├── controllers/
    │   └── users.controller.ts    # User endpoints
    ├── dto/
    │   ├── create-user.dto.ts     # Create user data transfer object
    │   └── update-user.dto.ts     # Update user data transfer object
    ├── entities/
    │   └── user.entity.ts         # User entity
    ├── schemas/
    │   └── user.schema.ts         # Mongoose schema
    ├── services/
    │   └── users.service.ts       # User business logic
    └── users.module.ts            # User module
```

## 🔧 Configuration

### Swagger Configuration

The Swagger documentation is configured in `src/main.ts` with the following features:

- **Custom UI**: Enhanced Swagger UI with custom styling
- **Multiple Servers**: Support for development and production environments
- **Contact Information**: API support contact details
- **License Information**: MIT license details
- **Comprehensive Documentation**: Detailed descriptions for all endpoints

### Validation

The API uses comprehensive validation with the following rules:

- **Email**: Must be a valid email format
- **Username**: 3-30 characters, alphanumeric and underscores only
- **Phone**: International phone number format
- **Password**: Minimum 6 characters
- **Required Fields**: All fields are required for user creation
- **Unique Constraints**: Email and username must be unique

## 🧪 Testing

Run the test suite:

```bash
# Unit tests
npm run test

# e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start:prod
```

### Environment Variables

Set the following environment variables for production:

```env
PORT=3000
MONGODB_URI=mongodb://your-production-mongodb-uri
NODE_ENV=production
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📞 Support

For support and questions:

- **Email**: support@example.com
- **GitHub Issues**: [Create an issue](https://github.com/your-repo/issues)
- **Documentation**: [Swagger UI](http://localhost:3000/api)

## 🔄 Version History

- **v1.0.0** - Initial release with complete CRUD operations and Swagger documentation
