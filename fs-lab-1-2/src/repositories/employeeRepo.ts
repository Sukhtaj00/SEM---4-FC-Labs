import type { Department } from "../interfaces/Employee";
import { departments as initialDepartments } from "../data/employees";

let departments: Department[] = [...initialDepartments];

export const employeeRepo = {
  getDepartments(): Department[] {
    return departments;
  },

  createEmployee(firstName: string, departmentName: string): Department[] {
    departments = departments.map(dept =>
      dept.name === departmentName
        ? {
            ...dept,
            employees: [...dept.employees, { firstName }]
          }
        : dept
    );

    return departments;
  }
};