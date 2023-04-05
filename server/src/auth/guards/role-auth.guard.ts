import { UserSession } from '../../types/users/user.type';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/types/roles/roles.types';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<Roles[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: UserSession = request.user;
    return matchRoles(roles, user.role.name);
  }
}

function matchRoles(roles: Roles[], userRole: Roles) {
  if (userRole === Roles.ADIMN) {
    return true;
  }

  if (userRole === roles[0]) {
    return true;
  }

  return false;
}
