import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/swagger-nest-node-mongo'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
