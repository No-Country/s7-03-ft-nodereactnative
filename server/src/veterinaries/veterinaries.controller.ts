import { Roles as RolesEnum } from './../types/roles/roles.types';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  HttpCode,
} from '@nestjs/common';
import { VeterinariesService } from './veterinaries.service';
import {
  CreateVeterinaryDto,
  ParamsVeterinaryDto,
  UpdateVeterinaryDto,
} from './dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { SkipAuth } from 'src/auth/decorators/skip-auth.decorator';
import { Request } from 'express';
import { Roles } from 'src/auth/decorators/role.decorator';

@ApiTags('Veterinaries')
@Controller('/api/v1/veterinaries')
export class VeterinariesController {
  constructor(private readonly veterinariesService: VeterinariesService) {}

  @ApiOkResponse({ description: 'Returns all veterinaries' })
  @SkipAuth()
  @Get()
  async findAll() {
    const veterinaries = await this.veterinariesService.findAll();

    return { veterinaries };
  }

  @ApiOkResponse({ description: 'Returns the veterinary with the given Id' })
  @SkipAuth()
  @Get(':id')
  async findOne(@Param() params: ParamsVeterinaryDto) {
    const veterinary = await this.veterinariesService.findOne(params.id);

    return { veterinary };
  }

  @ApiOperation({
    description:
      'Create a new veterinary, when a normal user creates a veterinary his role automatically becomes VETERINARY',
  })
  @ApiCreatedResponse({ description: 'a new veterinary was created' })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() createVeterinaryDto: CreateVeterinaryDto,
    @Req() req: Request,
  ) {
    const veterinary = await this.veterinariesService.create(
      createVeterinaryDto,
      req.user,
    );

    return { veterinary };
  }

  @ApiOkResponse({
    description: 'Returns the veterinary with the updated fields',
  })
  @ApiBearerAuth()
  @Roles(RolesEnum.VETERINARY)
  @Patch(':id')
  async update(
    @Param() params: ParamsVeterinaryDto,
    @Body() updateVeterinaryDto: UpdateVeterinaryDto,
    @Req() req: Request,
  ) {
    const veterinary = await this.veterinariesService.update(
      params.id,
      updateVeterinaryDto,
      req.user,
    );

    return { veterinary };
  }

  @ApiNoContentResponse({ description: 'Veterinary was deleted no response' })
  @ApiBearerAuth()
  @HttpCode(204)
  @Roles(RolesEnum.VETERINARY)
  @Delete(':id')
  remove(@Param() params: ParamsVeterinaryDto, @Req() req: Request) {
    return this.veterinariesService.remove(params.id, req.user);
  }
}
