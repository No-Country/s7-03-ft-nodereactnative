import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/roles.dto';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const roles = await this.prisma.role.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        updatedAt: true,
        createdAt: true,
      },
    });
    return roles;
  }

  async getById(id: string) {
    const role = await this.prisma.role.findFirst({
      where: { id, isActive: true },
    });

    if (!role) {
      throw new NotFoundException(`Role with id: ${id} not found`);
    }
    return role;
  }

  async getByName(name: string) {
    const role = await this.prisma.role.findFirst({
      where: { name, isActive: true },
    });

    if (!role) {
      throw new NotFoundException(`Role not found`);
    }

    return role;
  }

  async create(body: CreateRoleDto) {
    const role = await this.prisma.role.create({
      data: {
        name: body.name,
      },
      select: {
        id: true,
        name: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return role;
  }

  async update(id: string, body: CreateRoleDto) {
    const role: Role | null = await this.prisma.role.findFirst({
      where: { id },
    });
    if (!role) {
      throw new NotFoundException(`Role with id: ${id} not found`);
    }
    const updateRole = await this.prisma.role.update({
      where: { id },
      data: { ...body },
    });
    return updateRole;
  }

  async remove(id: string) {
    const role = await this.prisma.role.findFirst({
      where: { id, isActive: true },
    });
    if (!role) {
      throw new NotFoundException(`Role with id: ${id} not found`);
    }

    await this.prisma.role.update({
      where: { id },
      data: { isActive: false },
    });
    return;
  }
}
