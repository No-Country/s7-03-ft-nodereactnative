import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { SkipAuth } from 'src/auth/decorators/skip-auth.decorator';
import { RolesService } from './roles.service';

@Controller('/api/v1/roles')
export class RolesController {
  constructor(private readonly RolesService: RolesService) {}

  @SkipAuth()
  @Get()
  getAll() {
    return this.RolesService.getAll();
  }

  @SkipAuth()
  @Get()
  getById() {
    return this.RolesService.getById();
  }

  @SkipAuth()
  @Post()
  create() {
    return this.RolesService.create();
  }

  @SkipAuth()
  @Patch()
  update() {
    return this.RolesService.update();
  }

  @SkipAuth()
  @Delete()
  remove() {
    return this.RolesService.remove();
  }
}
