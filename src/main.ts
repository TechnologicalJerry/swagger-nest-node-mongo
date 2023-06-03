import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const PORT = 5000;
const HOST = 'LOCALHOST';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  Logger.log(`SERVER RUNNING ON HOST=> ${HOST} AT PORT=> ${PORT}`)
}
bootstrap();
