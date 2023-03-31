import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Roles as RolesEnum } from '../types/roles/roles.types';
import { CreateRoleDto, RoleParamsDto } from './dto/roles.dto';
import { RolesService } from './roles.service';
@ApiTags('Roles')
@ApiBearerAuth()
@Controller('/api/v1/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Roles(RolesEnum.ADIMN)
  @ApiOperation({ description: 'Only admins have access to this endpoint' })
  @ApiOkResponse({ description: 'Returns all roles in the database' })
  @Get()
  async getAll() {
    const roles = await this.rolesService.getAll();
    return roles;
  }

  @Roles(RolesEnum.ADIMN)
  @ApiOperation({ description: 'Only admins have access to this endpoint' })
  @ApiOkResponse({ description: 'Returns a role by id' })
  @Get(':id')
  async getById(@Param() params: RoleParamsDto) {
    const role = await this.rolesService.getById(params.id);
    return { role };
  }

  @Roles(RolesEnum.ADIMN)
  @ApiOperation({ description: 'Only admins have access to this endpoint' })
  @ApiCreatedResponse({ description: 'Create a role in the database' })
  @Post()
  async create(@Body() body: CreateRoleDto) {
    const role = await this.rolesService.create(body);
    return role;
  }

  @Roles(RolesEnum.ADIMN)
  @ApiOperation({ description: 'Only admins have access to this endpoint' })
  @ApiOkResponse({ description: 'Update a role by id' })
  @Patch(':id')
  async update(@Param() params: RoleParamsDto, @Body() body: CreateRoleDto) {
    const role = await this.rolesService.update(params.id, body);
    return role;
  }

  @Roles(RolesEnum.ADIMN)
  @ApiOperation({ description: 'Only admins have access to this endpoint' })
  @ApiNoContentResponse({ description: 'the role has been disabled' })
  @HttpCode(204)
  @Delete(':id')
  async remove(@Param() params: RoleParamsDto) {
    const role = await this.rolesService.remove(params.id);
    return role;
  }
}
