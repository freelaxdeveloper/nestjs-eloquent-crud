import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { CompanyController } from './controllers/company.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, CompanyController],
  providers: [AppService],
})
export class AppModule {}
