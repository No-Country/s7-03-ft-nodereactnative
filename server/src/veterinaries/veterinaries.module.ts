import { Module } from '@nestjs/common';
import { VeterinariesService } from './veterinaries.service';
import { VeterinariesController } from './veterinaries.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [VeterinariesController],
  providers: [VeterinariesService],
  exports: [VeterinariesService],
})
export class VeterinariesModule {}
