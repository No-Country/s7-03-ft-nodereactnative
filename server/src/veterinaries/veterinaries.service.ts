import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateVeterinaryDto,
  QueryLatitudeLongitude,
  QueryPaginationVeterinary,
  UpdateVeterinaryDto,
} from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { UserSession } from 'src/types/users/user.type';
import { Roles } from 'src/types/roles/roles.types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VeterinariesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
    private readonly config: ConfigService,
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

  async findAll(query: QueryPaginationVeterinary) {
    const { page: currentPage } = query;

    const limit = query.limit || 0;
    const skip = currentPage ? (currentPage - 1) * limit : 0;

    const [veterinaries, count] = await Promise.all([
      this.prisma.veterinary.findMany({
        take: limit || undefined,
        skip: skip,
        where: { isActive: true },
        orderBy: [{ latitude: 'desc' }, { longitude: 'desc' }],
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              country: true,
            },
          },
        },
      }),
      this.prisma.veterinary.count({ where: { isActive: true } }),
    ]);

    const lastPage = Math.ceil(count / limit);

    const paginationResponse =
      currentPage && limit
        ? {
            totalPages: lastPage,
            nextPage:
              currentPage < lastPage
                ? `${this.config.get<string>(
                    'BASE_URL',
                  )}/veterinaries?limit=${limit}&page=${currentPage + 1}`
                : null,
            previousPage:
              currentPage > 1
                ? `${this.config.get<string>(
                    'BASE_URL',
                  )}/veterinaries?limit=${limit}&page=${
                    // If current Page exceeded the last page, previous page becomes the last page
                    currentPage > lastPage ? lastPage : currentPage - 1
                  }`
                : null,
          }
        : undefined;

    return {
      ...paginationResponse,
      count,
      veterinaries,
    };
  }

  async findByLocation({ latitude, longitude }: QueryLatitudeLongitude) {
    const rangeToFind = 0.04;
    const latitudeMinRange = latitude - rangeToFind;
    const latitudeMaxRange = latitude + rangeToFind;
    const longitudeMinRange = longitude - rangeToFind;
    const longitudeMaxRange = longitude + rangeToFind;

    const veterinaries = await this.prisma.veterinary.findMany({
      where: {
        isActive: true,
        // longitude < longitudeMaxRange && longitude > longitudeMinRange
        longitude: { lte: longitudeMaxRange, gte: longitudeMinRange },
        // latitude < latitudeMaxRange && latitude > latitudeMinRange
        latitude: { lte: latitudeMaxRange, gte: latitudeMinRange },
      },
    });

    return veterinaries;
  }

  async findOne(id: string) {
    const veterinary = await this.prisma.veterinary.findFirst({
      where: { id, isActive: true },
      include: {
        product: { include: { productImage: true } },
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            country: true,
            phone: true,
            codePhone: true,
          },
        },
      },
    });

    if (!veterinary) {
      throw new NotFoundException('Veterinary Not Found');
    }

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
