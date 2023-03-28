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

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @SkipAuth()
  @Post('/signup')
  signUp(@Body() body: SignUpDto) {
    return this.authService.signUp(body);
  }

  @HttpCode(200)
  @SkipAuth()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Body() body: LoginDto, @Req() req: Request) {
    return this.authService.login(req.user);
  }
}
