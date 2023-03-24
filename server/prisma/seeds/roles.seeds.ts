import { prisma } from '../seeds';

export const roleSeed = async () => {
  const role = await prisma.role.create({
    data: {
      name: 'ADMIN',
    },
  });

  return role;
};
