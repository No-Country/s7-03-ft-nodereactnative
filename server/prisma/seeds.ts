import { userSeeds } from './seeds/users.seeds';
import { PrismaClient } from '@prisma/client';
import { roleSeed } from './seeds/roles.seeds';

export const prisma = new PrismaClient();

async function main() {
  const adminRole = await roleSeed();

  await userSeeds(adminRole);
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
