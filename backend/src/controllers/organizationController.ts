import { Request, Response } from "express";
import { organizationService } from "../services/organizationService";

export const organizationController = {
  getRoles(req: Request, res: Response) {
    res.json(organizationService.getRoles());
  },

  createRole(req: Request, res: Response) {
    try {
      const { firstName, lastName, role } = req.body;
      const data = organizationService.createRole(firstName, lastName, role);
      res.json(data);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
};