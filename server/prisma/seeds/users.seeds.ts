import { Role } from '@prisma/client';
import { prisma } from '../seeds';

export const userSeeds = async (adminRole: Role) => {
  await prisma.user.upsert({
    where: { email: 'jared@gmail.com' },
    update: {},
    create: {
      email: 'jared@gmail.com',
      firstName: 'jared',
      lastName: 'mejia',
      password: '$2b$10$b63K/D03WFBktWy552L5XuibmiD5SxCrKg9kHCqOYaZwxRjIg14u2',
      phone: '11111111',
      country: 'Honduras',
      codePhone: '504',
      roleId: adminRole.id,
    },
  });
};
