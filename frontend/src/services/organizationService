import type { Role } from "../interfaces/role";
import { organizationRepo } from "../repositories/organizationRepo";

export const organizationService = {
  createRole(
    firstName: string,
    lastName: string,
    roleTitle: string
  ):
    | { success: true; data: Role[] }
    | { success: false; message: string } {

    if (firstName.trim().length < 3) {
      return { success: false, message: "First name must be at least 3 characters." };
    }

    const existingRoles = organizationRepo.getRoles();

    const roleExists = existingRoles.some(
      r => r.role.toLowerCase() === roleTitle.trim().toLowerCase()
    );

    if (roleExists) {
      return { success: false, message: "This role is already occupied." };
    }

    const updatedRoles = organizationRepo.createRole({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      role: roleTitle.trim()
    });

    return { success: true, data: updatedRoles };
  }
};