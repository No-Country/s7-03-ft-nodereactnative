import { UserSession } from './../types/user.type';
import { SignUpDto } from './dto/auth.dto';
import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async signUp(body: SignUpDto) {
    try {
      //encrypt password
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(body.password, salt);

      body.password = hashedPassword;
      //create User
      const newUser = await this.prisma.user.create({
        data: {
          ...body,
        },
        select: {
          id: true,
          email: true,
          codePhone: true,
          country: true,
          updatedAt: true,
          createdAt: true,
          firstName: true,
          lastName: true,
          roleId: true,
        },
      });

      return newUser;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email Already Exists');
      }
    }
  }

  async login(user: UserSession) {
    const payload = { id: user.id };
    const token = this.jwt.sign(payload);

    return { user, token };
  }

  async validate(body: { email: string; password: string }) {
    const user = await this.prisma.user.findFirst({
      where: { email: body.email, isActive: true },
      include: { role: { select: { name: true } } },
    });

    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    if (!(await bcrypt.compare(body.password, user.password))) {
      throw new ForbiddenException('Wrong Credentials');
    }

    //@ts-expect-error delete user password from the request
    delete user.password;

    return user;
  }
}
