import { User } from '@prisma/client';
import { Roles } from '../roles/roles.types';

export interface UserSession extends Omit<User, 'password'> {
  role: {
    name: Roles;
  };
}
