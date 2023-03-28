import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SkipAuth } from './decorators/skip-auth.decorator';
import { LoginDto, SignUpDto } from './dto/auth.dto';
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
  @Post('/login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
