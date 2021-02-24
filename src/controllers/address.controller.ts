import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import Address from '../models/address.model';
import { AddressCreateRequest } from '../requests/address/CreateRequest';
import { AddressUpdateRequest } from '../requests/address/UpdateRequest';

@Controller('addresses')
export class AddressController {
  @Get()
  async index() {
    const items = await Address.with(['user']).get();

    return items;
  }

  @Post()
  async create(@Body() body: AddressCreateRequest) {
    const item = await Address.forge().save(body);

    return item;
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    const item = await Address.forge({ id }).with(['user']).fetch();

    return item;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: AddressUpdateRequest) {
    const item = await Address.forge({ id }).save(body);

    return item;
  }

  @Delete(':id')
  async destroy(@Param('id') id: number) {
    await Address.where('id', id).destroy();

    return {
      success: true,
    };
  }
}
