import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  Req,
} from '@nestjs/common';
import {
  CreateVeterinariesFavoriteDto,
  ParamsVeterinariesFavoriteDto,
} from './dto';
import { VeterinariesFavoritesService } from './veterinaries-favorites.service';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Veterinaries Favorites')
@ApiBearerAuth()
@Controller('/api/v1/veterinaries-favorites')
export class VeterinariesFavoritesController {
  constructor(
    private readonly veterinariesFavoritesService: VeterinariesFavoritesService,
  ) {}

  @ApiCreatedResponse({ description: 'Added veterinary to favorites' })
  @ApiNotFoundResponse({
    description: 'Veterinary either does not exist or was deleted',
  })
  @ApiConflictResponse({
    description: "Veterinary is already in the user's favorite list",
  })
  @Post()
  async create(
    @Body() createVeterinariesFavoriteDto: CreateVeterinariesFavoriteDto,
    @Req() req: Request,
  ) {
    const veterinaryFavorite = await this.veterinariesFavoritesService.create(
      createVeterinariesFavoriteDto,
      req.user,
    );

    return { veterinaryFavorite };
  }

  @ApiOkResponse({
    description: 'Returns all favorites veterinaries of the user in session',
  })
  @Get()
  async findAllUsersFavorite(@Req() req: Request) {
    const veterinariesFavorites =
      await this.veterinariesFavoritesService.findAllUsersFavorite(req.user);

    return { veterinariesFavorites };
  }

  @ApiNoContentResponse({
    description: 'Favorite Veterinary was removed from the user favorites',
  })
  @ApiNotFoundResponse({
    description: 'Veterinary either does not exist or was deleted',
  })
  @HttpCode(204)
  @Delete(':id')
  async remove(
    @Param() params: ParamsVeterinariesFavoriteDto,
    @Req() req: Request,
  ) {
    return this.veterinariesFavoritesService.remove(params.id, req.user);
  }
}
