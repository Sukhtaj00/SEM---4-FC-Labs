import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const employeeController = {
  async getEmployees(req: Request, res: Response) {
    try {
      const departments = await prisma.department.findMany({
        include: {
          employees: {
            include: {
              role: true
            }
          }
        }
      });

      // Transform DB structure into frontend-friendly format
      const formatted = departments.map(dept => ({
        name: dept.name,
        employees: dept.employees.map(emp => ({
          firstName: emp.firstName,
          lastName: emp.lastName,
          role: emp.role.title
        }))
      }));

      res.json(formatted);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch employees" });
    }
  },

  async createEmployee(req: Request, res: Response) {
    try {
      const { firstName, lastName, departmentName, roleTitle } = req.body;

      if (!firstName || !lastName || !departmentName || !roleTitle) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Lookup department by name
      const department = await prisma.department.findUnique({
        where: { name: departmentName }
      });

      if (!department) {
        return res.status(400).json({ message: "Department not found" });
      }

      // Lookup role by title
      const role = await prisma.role.findUnique({
        where: { title: roleTitle }
      });

      if (!role) {
        return res.status(400).json({ message: "Role not found" });
      }

      // Create employee
      const employee = await prisma.employee.create({
        data: {
          firstName,
          lastName,
          departmentId: department.id,
          roleId: role.id
        }
      });

      res.json(employee);

    } catch (error) {
      res.status(500).json({ message: "Failed to create employee" });
    }
  }
};