import { VeterinariesService } from 'src/veterinaries/veterinaries.service';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReviewDto, UpdateReviewDto } from './dto';
import { Prisma, Review } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserSession } from 'src/types/users/user.type';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ReviewsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly veterinariesService: VeterinariesService,
    private readonly usersService: UsersService,
  ) {}

  async create(
    createReviewDto: CreateReviewDto,
    userSession: UserSession,
  ): Promise<Review> {
    await this.veterinariesService.veterinaryExists(
      createReviewDto.veterinaryId,
    );

    try {
      const review = await this.prisma.review.create({
        data: { ...createReviewDto, userId: userSession.id },
      });

      return review;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          throw new ConflictException('Review already made in this veterinary');
        }
      }

      throw e;
    }
  }

  async findAll(): Promise<Review[]> {
    const reviews = await this.prisma.review.findMany({
      where: { isActive: true },
      include: { veterinary: true },
    });

    return reviews;
  }

  async findOne(id: string): Promise<Review> {
    const review = await this.prisma.review.findFirst({
      where: { id, isActive: true },
      include: { veterinary: true },
    });

    if (!review) {
      throw new NotFoundException('Review Not Found');
    }

    return review;
  }

  async findReviewsByVeterinary(id: string): Promise<Review[]> {
    const reviews = await this.prisma.review.findMany({
      where: { isActive: true, veterinaryId: id },
    });

    return reviews;
  }

  async update(
    id: string,
    updateReviewDto: UpdateReviewDto,
    userSession: UserSession,
  ): Promise<Review> {
    const review = await this.reviewExists(id);

    await this.usersService.protectUsersAccount(review.userId, userSession);

    const updatedReview = await this.prisma.review.update({
      where: { id: review.id },
      data: { ...updateReviewDto },
    });

    return updatedReview;
  }

  async remove(id: string, userSession: UserSession): Promise<void> {
    const review = await this.reviewExists(id);

    await this.usersService.protectUsersAccount(review.userId, userSession);

    await this.prisma.review.delete({
      where: { id: review.id },
    });

    return;
  }

  async reviewExists(id: string) {
    const review = await this.prisma.review.findFirst({
      where: { id, isActive: true },
    });

    if (!review) {
      throw new NotFoundException('Review Not Found');
    }

    return review;
  }
}
