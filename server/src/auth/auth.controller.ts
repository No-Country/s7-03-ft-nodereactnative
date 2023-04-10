import { LocalAuthGuard } from './guards/local-auth.guard';
import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SkipAuth } from './decorators/skip-auth.decorator';
import { LoginDto, SignUpDto } from './dto/auth.dto';
import { Request } from 'express';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({ description: 'Creates an user in the database' })
  @ApiConflictResponse({
    description: 'Cannot create user, email already exists',
  })
  @SkipAuth()
  @Post('/signup')
  async signUp(@Body() body: SignUpDto) {
    const user = await this.authService.signUp(body);

    return { user };
  }

  @ApiOkResponse({ description: 'returns the user and the token' })
  @HttpCode(200)
  @SkipAuth()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() body: LoginDto, @Req() req: Request) {
    const { user, token } = await this.authService.login(req.user);

    return { user, token };
  }
}
