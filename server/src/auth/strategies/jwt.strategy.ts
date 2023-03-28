import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    const user = await this.prisma.user.findFirst({
      where: { id: payload.id, isActive: true },
      select: {
        id: true,
        roleId: true,
        email: true,
        codePhone: true,
        country: true,
        updatedAt: true,
        createdAt: true,
        firstName: true,
        lastName: true,
        Role: true,
        password: false,
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        'The Owner Of The Session Is No Longer Active',
      );
    }

    return user;
  }
}
