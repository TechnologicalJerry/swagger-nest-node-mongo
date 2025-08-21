import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors();
  
  // Enable validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Swagger documentation setup
  const config = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription(`
      A comprehensive RESTful API for managing users with MongoDB.
      
      ## Features
      - User CRUD operations
      - Data validation
      - MongoDB integration
      - Swagger documentation
      
      ## Authentication
      Currently, this API does not require authentication for demonstration purposes.
      
      ## Rate Limiting
      No rate limiting is currently implemented.
    `)
    .setVersion('1.0')
    .addTag('app', 'Application status and health check endpoints')
    .addTag('users', 'User management operations')
    .addServer('http://localhost:3000', 'Development server')
    .addServer('https://api.example.com', 'Production server')
    .setContact('API Support', 'https://github.com/your-repo', 'support@example.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  
  // Custom Swagger UI options
  const customOptions = {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true,
      showExtensions: true,
      showCommonExtensions: true,
    },
    customSiteTitle: 'User Management API Documentation',
    customCss: '.swagger-ui .topbar { display: none }',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
  };
  
  SwaggerModule.setup('api', app, document, customOptions);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📚 Swagger documentation is available at: http://localhost:${port}/api`);
  console.log(`🔍 API endpoints:`);
  console.log(`   - GET  / - Application status`);
  console.log(`   - POST /users - Create a new user`);
  console.log(`   - GET  /users - Get all users`);
  console.log(`   - GET  /users/:id - Get user by ID`);
  console.log(`   - PATCH /users/:id - Update user`);
  console.log(`   - DELETE /users/:id - Delete user`);
}
bootstrap();
