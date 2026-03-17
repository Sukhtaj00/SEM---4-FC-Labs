import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const employeeController = {
  getEmployees(req: Request, res: Response) {
    res.json(employeeService.getEmployees());
  },

  createEmployee(req: Request, res: Response) {
    try {
      const { firstName, departmentName } = req.body;
      const data = employeeService.createEmployee(firstName, departmentName);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
};