import { userSeeds } from './seeds/users.seeds';
import { PrismaClient } from '@prisma/client';
import { roleSeed } from './seeds/roles.seeds';
import { veterinarySeed } from './seeds/veterinaries.seeds';

export const prisma = new PrismaClient();

async function main() {
  const { adminRole, normalRole, veterinaryRole } = await roleSeed();

  const { adminUser } = await userSeeds({
    adminRole,
    normalRole,
    veterinaryRole,
  });

  await veterinarySeed({ adminUser });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
