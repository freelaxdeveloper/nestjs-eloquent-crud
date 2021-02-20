import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import UserModel from './models/user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    const users = await UserModel.get();

    return users;
  }
}
