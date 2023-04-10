import { prisma } from '../seeds';
import { faker } from '@faker-js/faker';

export const veterinarySeed = async () => {
  const veterinariesFake = [];

  const usersDb = await prisma.user.findMany({ take: 50 });

  for (let i = 0; i < 50; i++) {
    const user = usersDb[Math.floor(Math.random() * usersDb.length)];

    veterinariesFake.push({
      name: faker.company.name(),
      description: faker.company.bs(),
      address: faker.address.streetAddress(),
      latitude: Number(faker.address.latitude()),
      longitude: Number(faker.address.longitude()),
      phone: faker.phone.number(),
      country: faker.address.countryCode('alpha-3'),
      userId: user.id,
    });
  }

  await prisma.veterinary.createMany({
    data: veterinariesFake,
  });

  return;
};
