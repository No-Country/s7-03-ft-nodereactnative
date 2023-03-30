import { prisma } from '../seeds';

export const roleSeed = async () => {
  const adminRole = await prisma.role.upsert({
    where: {
      name: 'ADMIN',
    },
    update: {},
    create: { name: 'ADMIN' },
  });

  const normalRole = await prisma.role.upsert({
    where: {
      name: 'NORMAL',
    },
    update: {},
    create: { name: 'NORMAL' },
  });

  return { adminRole, normalRole };
};
