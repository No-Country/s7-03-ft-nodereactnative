import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService, private moduleRef: ModuleRef) {
    super({
      passReqToCallback: true,
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(req: Request, email: string, password: string): Promise<any> {
    const contextId = ContextIdFactory.getByRequest(req);

    await this.moduleRef.resolve(AuthService, contextId);

    const user = await this.authService.validate({ email, password });

    return user;
  }
}
