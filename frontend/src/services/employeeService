import type { Department } from "../interfaces/Employee";
import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {
  createEmployee(firstName: string, departmentName: string): 
    | { success: true; data: Department[] }
    | { success: false; message: string } {

    const departments = employeeRepo.getDepartments();

    if (!departmentName) {
      return { success: false, message: "Department must be selected." };
    }

    const departmentExists = departments.some(
      dept => dept.name === departmentName
    );

    if (!departmentExists) {
      return { success: false, message: "Department does not exist." };
    }

    if (firstName.trim().length < 3) {
      return { success: false, message: "First name must be at least 3 characters." };
    }

    const updatedDepartments = employeeRepo.createEmployee(
      firstName.trim(),
      departmentName
    );

    return { success: true, data: updatedDepartments };
  }
};