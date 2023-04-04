import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVeterinaryDto, UpdateVeterinaryDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { UserSession } from 'src/types/users/user.type';
import { Roles } from 'src/types/roles/roles.types';

@Injectable()
export class VeterinariesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async create(
    createVeterinaryDto: CreateVeterinaryDto,
    userSession: UserSession,
  ) {
    if (userSession.role.name === Roles.NORMAL) {
      await this.userService.changeUserRole(userSession.id, Roles.VETERINARY);
    }

    const veterinary = await this.prisma.veterinary.create({
      data: { ...createVeterinaryDto, userId: userSession.id },
    });

    return veterinary;
  }

  async findAll() {
    const veterinaries = await this.prisma.veterinary.findMany({
      take: 100,
      where: { isActive: true },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, country: true },
        },
      },
    });
    return veterinaries;
  }

  async findOne(id: string) {
    const veterinary = await this.veterinaryExists(id);

    return veterinary;
  }

  async update(
    id: string,
    updateVeterinaryDto: UpdateVeterinaryDto,
    userSession: UserSession,
  ) {
    const veterinaryToUpdate = await this.veterinaryExists(id);

    await this.userService.protectUsersAccount(
      veterinaryToUpdate.userId,
      userSession,
    );

    const veterinary = await this.prisma.veterinary.update({
      where: { id: veterinaryToUpdate.id },
      data: { ...updateVeterinaryDto },
    });

    return veterinary;
  }

  async remove(id: string, userSession: UserSession) {
    const veterinaryToUpdate = await this.veterinaryExists(id);

    await this.userService.protectUsersAccount(
      veterinaryToUpdate.userId,
      userSession,
    );

    const veterinary = await this.prisma.veterinary.update({
      where: { id: veterinaryToUpdate.id },
      data: { isActive: false },
    });

    return veterinary;
  }

  async veterinaryExists(id: string) {
    const veterinary = await this.prisma.veterinary.findFirst({
      where: { id, isActive: true },
    });

    if (!veterinary) {
      throw new NotFoundException('Veterinary Not Found');
    }

    return veterinary;
  }
}
