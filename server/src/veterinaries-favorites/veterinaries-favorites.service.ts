import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVeterinariesFavoriteDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSession } from 'src/types/users/user.type';
import { VeterinariesService } from 'src/veterinaries/veterinaries.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VeterinariesFavoritesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly veterinariesService: VeterinariesService,
  ) {}

  async create(
    createVeterinariesFavoriteDto: CreateVeterinariesFavoriteDto,
    userSession: UserSession,
  ) {
    try {
      const veterinary = await this.veterinariesService.veterinaryExists(
        createVeterinariesFavoriteDto.veterinaryId,
      );

      const veterinaryFavorite = await this.prisma.veterinaryFavorite.create({
        data: {
          veterinaryId: veterinary.id,
          userId: userSession.id,
        },
      });

      return veterinaryFavorite;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          throw new ConflictException('Veterinary already added to favorites');
        }
      }
      throw e;
    }
  }

  async findAllUsersFavorite(userSession: UserSession) {
    const veterinariesFavorite = await this.prisma.veterinaryFavorite.findMany({
      where: { userId: userSession.id },
      include: {
        veterinary: true,
        user: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    return veterinariesFavorite;
  }

  async remove(id: string) {
    const veterinaryFavorite = await this.veterinaryFavoriteExists(id);

    await this.prisma.veterinaryFavorite.delete({
      where: { id: veterinaryFavorite.id },
    });

    return;
  }

  async veterinaryFavoriteExists(id: string) {
    const veterinaryFavorite = await this.prisma.veterinaryFavorite.findFirst({
      where: { id },
    });

    if (!veterinaryFavorite) {
      throw new NotFoundException('Veterinary Favorite Not Found');
    }

    return veterinaryFavorite;
  }
}
