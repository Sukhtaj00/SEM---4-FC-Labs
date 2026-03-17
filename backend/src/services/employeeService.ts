import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {
  getEmployees() {
    return employeeRepo.getAll();
  },

  createEmployee(firstName: string, departmentName: string) {
    if (firstName.trim().length < 3) {
      throw new Error("First name must be at least 3 characters.");
    }

    return employeeRepo.create(firstName, departmentName);
  }
};