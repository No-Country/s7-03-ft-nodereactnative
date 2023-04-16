import { faker } from '@faker-js/faker';
import { Role } from '@prisma/client';
import { prisma } from '../seeds';

export const userSeeds = async (roles: {
  adminRole: Role;
  normalRole: Role;
  veterinaryRole: Role;
}) => {
  const adminUser = await prisma.user.upsert({
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

  const users = [];

  for (let i = 0; i < 20; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    users.push({
      email: faker.internet.email(firstName, lastName),
      firstName: firstName,
      lastName: lastName,
      password: faker.internet.password(),
      phone: faker.phone.number(),
      country: faker.address.country(),
      codePhone: (Math.floor(Math.random() * 998) + 1).toString(),
      roleId: roles.normalRole.id,
    });
  }

  await prisma.user.createMany({
    data: users,
  });

  return { adminUser };
};
