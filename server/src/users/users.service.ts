import { PrismaService } from './../prisma/prisma.service';
import { UserSession } from '../types/users/user.type';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany({
      where: { isActive: true },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        country: true,
        codePhone: true,
        phone: true,
        role: {
          select: {
            name: true,
          },
        },
        updatedAt: true,
        createdAt: true,
        password: false,
      },
    });
    return users;
  }

  getUserInSession(user: UserSession) {
    return user;
  }

  async findOne(id: string) {
    const user = await this.userExists(id);

    return user;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
    userSession: UserSession,
  ) {
    const user = await this.userExists(id);

    this.protectUsersAccount(user.id, userSession);

    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: { ...updateUserDto },
    });

    //@ts-expect-error delete user password from the request
    delete updatedUser.password;

    return updatedUser;
  }

  async remove(id: string, userSession: UserSession) {
    const user = await this.userExists(id);

    this.protectUsersAccount(user.id, userSession);

    await this.prisma.user.update({ where: { id }, data: { isActive: false } });

    return;
  }

  async userExists(id: string) {
    const user = await this.prisma.user.findFirst({
      where: { id, isActive: true },
    });

    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    //@ts-expect-error delete user password from the request
    delete user.password;

    return user;
  }

  protectUsersAccount(userId: string, userSession: UserSession) {
    if (userSession.role.name === 'ADMIN') {
      return;
    }

    if (userSession.id !== userId) {
      throw new ForbiddenException('You are not the owner of this account');
    }

    return;
  }
}
