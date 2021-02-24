import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import UserModel from '../models/user.model';
import { UserCreateRequest } from '../requests/UserCreateRequest';
import { UserUpdateRequest } from '../requests/UserUpdateRequest';

@Controller('users')
export class UserController {
  @Get()
  index() {
    const users = UserModel
      .with(['companies', 'addresses'])
      .withCount(['companies', 'addresses'])
      .get();

    return users;
  }

  @Post()
  async create(@Body() body: UserCreateRequest) {
    const user = await UserModel.forge().save(body);

    return user;
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    const user = await UserModel.forge({ id })
      .with(['companies', 'addresses'])
      .withCount(['companies', 'addresses'])
      .fetch();

    return user;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: UserUpdateRequest) {
    const user = await UserModel.forge({ id }).save(body);

    return user;
  }

  @Delete(':id')
  async destroy(@Param('id') id: number) {
    await UserModel.where('id', id).destroy();

    return {
      success: true,
    };
  }
}
