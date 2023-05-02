import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { FileuploadModule } from './fileupload/fileupload.module';

@Module({
  imports: [TodosModule, UsersModule, ProductsModule, FileuploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
