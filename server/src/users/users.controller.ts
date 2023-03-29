import { SkipAuth } from './../auth/decorators/skip-auth.decorator';
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
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
  @ApiOperation({ description: 'Only admins have access to this endpoint' })
  @ApiOkResponse({ description: 'Returns all users in the databse' })
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

  @ApiOkResponse({
    description: 'Return user by the given id from the database',
  })
  @ApiNotFoundResponse({
    description: 'User not found either does not exist or has been disabled',
  })
  @SkipAuth()
  @Get(':id')
  async findOne(@Param() params: UserParamsDto) {
    const user = await this.usersService.findOne(params.id);

    return { user };
  }

  @ApiOkResponse({ description: 'Returns the user with the updated fields' })
  @ApiNotFoundResponse({
    description: 'User not found either does not exist or has been disabled',
  })
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

  @ApiNoContentResponse({ description: 'No return the user has been deleted' })
  @ApiNotFoundResponse({
    description: 'User not found either does not exist or has been disabled',
  })
  @HttpCode(204)
  @Delete(':id')
  remove(@Param() params: UserParamsDto, @Req() req: Request) {
    return this.usersService.remove(params.id, req.user);
  }
}
