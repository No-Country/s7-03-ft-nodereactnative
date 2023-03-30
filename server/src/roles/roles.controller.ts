import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SkipAuth } from 'src/auth/decorators/skip-auth.decorator';
import { CreateRoleDto, RoleParamsDto } from './dto/roles.dto';
import { RolesService } from './roles.service';

@Controller('/api/v1/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @SkipAuth()
  @Get()
  async getAll() {
    return this.rolesService.getAll();
  }

  @SkipAuth()
  @Get(':id')
  async getById(@Param() params: RoleParamsDto) {
    const role = await this.rolesService.getById(params.id);
    return { role };
  }

  @SkipAuth()
  @Post()
  async create(@Body() body: CreateRoleDto) {
    const role = await this.rolesService.create(body);
    return role;
  }

  @SkipAuth()
  @Patch(':id')
  async update(@Param() params: RoleParamsDto, @Body() body: CreateRoleDto) {
    const role = await this.rolesService.update(params, body);
    return role;
  }

  @SkipAuth()
  @Delete()
  remove() {
    return this.rolesService.remove();
  }
}
