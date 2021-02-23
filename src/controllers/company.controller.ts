import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import CompanyModel from '../models/company.model';
import { CompanyCreateRequest } from '../requests/CompanyCreateRequest';
import { CompanyUpdateRequest } from '../requests/CompanyUpdateRequest';

@Controller('companies')
export class CompanyController {
  @Get()
  async index() {
    const items = await CompanyModel.get();

    return items;
  }

  @Post()
  async create(@Body() body: CompanyCreateRequest) {
    const item = await CompanyModel.forge().save(body);

    return item;
  }

  @Get(':id')
  async show(@Param('id') id: number) {
    const item = await CompanyModel.findById(id);

    return item;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: CompanyUpdateRequest) {
    const item = await CompanyModel.forge({ id }).save(body);

    return item;
  }

  @Delete(':id')
  async destroy(@Param('id') id: number) {
    await CompanyModel.where('id', id).destroy();

    return {
      success: true,
    };
  }
}
