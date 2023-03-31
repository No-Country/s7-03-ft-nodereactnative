import { Role } from '@prisma/client';
import { prisma } from '../seeds';

export const userSeeds = async (roles: {
  adminRole: Role;
  normalRole: Role;
  veterinaryRole: Role;
}) => {
  await prisma.user.upsert({
    where: { email: 'jared@gmail.com' },
    update: {},
    create: {
      email: 'jared@gmail.com',
      firstName: 'jared',
      lastName: 'mejia',
      password: '$2b$12$ByXuBcoEw9/8FJ5CWqFpmeYBYLQ7vNWCq33RZQGf3mDLZxM5J74Ym',
      phone: '11111111',
      country: 'Honduras',
      codePhone: '504',
      roleId: roles.adminRole.id,
    },
  });

  await prisma.user.upsert({
    where: { email: 'mejia@gmail.com' },
    update: {},
    create: {
      email: 'mejia@gmail.com',
      firstName: 'jared',
      lastName: 'mejia',
      password: '$2b$12$ByXuBcoEw9/8FJ5CWqFpmeYBYLQ7vNWCq33RZQGf3mDLZxM5J74Ym',
      phone: '11111111',
      country: 'Honduras',
      codePhone: '504',
      roleId: roles.normalRole.id,
    },
  });
};
