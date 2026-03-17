import { organization } from "../data/organization";

let roles = [...organization];

export const organizationRepo = {
  getAll() {
    return roles;
  },

  create(role: any) {
    roles = [...roles, role];
    return roles;
  }
};