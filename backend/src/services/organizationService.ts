import { organizationRepo } from "../repositories/organizationRepo";

export const organizationService = {
  getRoles() {
    return organizationRepo.getAll();
  },

  createRole(firstName: string, lastName: string, role: string) {
    if (firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters.");
    }

    const existing = organizationRepo.getAll();

    const roleExists = existing.some(r =>
      r.role.toLowerCase() === role.toLowerCase()
    );

    if (roleExists) {
      throw new Error("Role already occupied.");
    }

    return organizationRepo.create({ firstName, lastName, role });
  }
};