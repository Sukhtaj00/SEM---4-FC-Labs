import type { Role } from "../interfaces/role";
import { organization as initialRoles } from "../data/organization";

let roles: Role[] = [...initialRoles];

export const organizationRepo = {
  getRoles(): Role[] {
    return roles;
  },

  createRole(newRole: Role): Role[] {
    roles = [...roles, newRole];
    return roles;
  }
};