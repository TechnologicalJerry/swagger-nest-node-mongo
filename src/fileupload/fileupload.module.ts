/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FileuploadController } from './fileupload.controller';
import { FileuploadService } from './fileupload.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register({ dest: 'uploads' })],
  controllers: [FileuploadController],
  providers: [FileuploadService]
})
export class FileuploadModule { }
