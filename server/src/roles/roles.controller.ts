import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { SkipAuth } from 'src/auth/decorators/skip-auth.decorator';
import { CreateRoleDto, RoleParamsDto } from './dto/roles.dto';
import { RolesService } from './roles.service';

@Controller('/api/v1/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @SkipAuth()
  @Get()
  async getAll() {
    const roles = await this.rolesService.getAll();
    return roles;
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
  async update(
    @Param() params: RoleParamsDto,
    @Body() body: CreateRoleDto,
    @Req() req: Request,
  ) {
    const role = await this.rolesService.update(params.id, body, req.user);
    return role;
  }

  @SkipAuth()
  @Delete(':id')
  async remove(@Param() params: RoleParamsDto, @Req() req: Request) {
    const role = await this.rolesService.remove(params.id, req.user);
    return role;
  }
}
