import { User } from '@prisma/client';

export interface UserSession extends Omit<User, 'password'> {
  role: {
    name: string;
  };
}
