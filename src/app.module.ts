import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { CompanyController } from './controllers/company.controller';
import { AddressController } from './controllers/address.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, CompanyController, AddressController],
  providers: [AppService],
})
export class AppModule {}
