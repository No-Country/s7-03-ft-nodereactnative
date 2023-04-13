import { User } from '@prisma/client';
import { prisma } from '../seeds';

export const veterinarySeed = async (users: { adminUser: User }) => {
  await prisma.veterinary.createMany({
    data: [
      {
        name: 'Honduras Veterinary',
        description: 'Veterinary description',
        address: 'Address of the Veterinary',
        latitude: 24.072516,
        longitude: -86.2120501,
        phone: '1111111111',
        country: 'HND',
        userId: users.adminUser.id,
      },
      {
        name: 'Honduras Veterinary 2',
        description: 'Veterinary description',
        address: 'Address of the Veterinary',
        latitude: 24.082516,
        longitude: -86.2020501,
        phone: '1111111111',
        country: 'HND',
        userId: users.adminUser.id,
      },
      {
        name: 'Buenos Aires Veterinary',
        description: 'Veterinary description',
        address: 'Address of the Veterinary',
        latitude: -34.920345,
        longitude: -57.969559,
        phone: '1111111111',
        country: 'ARG',
        userId: users.adminUser.id,
      },
      {
        name: 'Cordoba Veterinary',
        description: 'Veterinary description',
        address: 'Address of the Veterinary',
        latitude: -31.416668,
        longitude: -64.183334,
        phone: '1111111111',
        country: 'ARG',
        userId: users.adminUser.id,
      },
      {
        name: 'Barranquilla Veterinary',
        description: 'Veterinary description',
        address: 'Address of the Veterinary',
        latitude: 10.963889,
        longitude: -74.796387,
        phone: '1111111111',
        country: 'COL',
        userId: users.adminUser.id,
      },
      {
        name: 'Medellin Veterinary',
        description: 'Veterinary description',
        address: 'Address of the Veterinary',
        latitude: 6.230833,
        longitude: -75.590553,
        phone: '1111111111',
        country: 'COL',
        userId: users.adminUser.id,
      },
    ],
  });

  return;
};

/*{
    "name": "Veterinary",
    "description": "Veterinary description",
    "address": "Address of the Veterinary",
    "latitude": 24.072516,
    "longitude": -86.2120501,
    "phone": "1111111111",
    "country": "HND"
}*/
