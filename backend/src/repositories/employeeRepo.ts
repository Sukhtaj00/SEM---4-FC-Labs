import { departments } from "../data/employees";

let data = [...departments];

export const employeeRepo = {
  getAll() {
    return data;
  },

  create(firstName: string, departmentName: string) {
    data = data.map(dept =>
      dept.name === departmentName
        ? { ...dept, employees: [...dept.employees, { firstName }] }
        : dept
    );
    return data;
  }
};