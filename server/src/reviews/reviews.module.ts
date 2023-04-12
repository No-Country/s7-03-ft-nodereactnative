import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { VeterinariesModule } from 'src/veterinaries/veterinaries.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [VeterinariesModule, UsersModule],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
