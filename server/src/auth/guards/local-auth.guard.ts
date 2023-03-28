import { BadRequestException } from '@nestjs/common/exceptions';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err: Error, user: any, info: any) {
    // You can throw an exception based on either "info" or "err" arguments
    if (info?.message === 'Missing credentials') {
      throw new BadRequestException(info.message);
    }

    if (err || !user) {
      throw err || new UnauthorizedException('Unauthorized');
    }
    return user;
  }
}
