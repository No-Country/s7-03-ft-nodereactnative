import { SkipAuth } from './../auth/decorators/skip-auth.decorator';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto, UserParamsDto } from './dto/update-user.dto';
import { Request } from 'express';
import { CheckAdminGuard } from 'src/auth/guards/check-admin-auth.guard';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(CheckAdminGuard)
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();

    return { users };
  }

  @ApiOkResponse({ description: 'returns the user currently in session' })
  @Get('/me')
  async getUserInSession(@Req() req: Request) {
    const user = await this.usersService.getUserInSession(req.user);

    return { user };
  }

  @SkipAuth()
  @Get(':id')
  async findOne(@Param() params: UserParamsDto) {
    const user = await this.usersService.findOne(params.id);

    return { user };
  }

  @Patch(':id')
  async update(
    @Param() params: UserParamsDto,
    @Body() updateUserDto: UpdateUserDto,
    @Req() req: Request,
  ) {
    const user = await this.usersService.update(
      params.id,
      updateUserDto,
      req.user,
    );

    return { user };
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param() params: UserParamsDto, @Req() req: Request) {
    return this.usersService.remove(params.id, req.user);
  }
}
