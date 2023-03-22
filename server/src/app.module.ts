import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PrismaService],
})
export class AppModule {}
