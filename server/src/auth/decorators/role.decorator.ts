import { SetMetadata } from '@nestjs/common';
import { Roles as RolesEnum } from 'src/types/roles/roles.types';

export const Roles = (...roles: RolesEnum[]) => SetMetadata('roles', roles);
