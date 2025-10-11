import { type Request, type Response } from 'express';
import type { Prisma } from 'types';
import ShiftService from './service.ts';

class ShiftController {
  private service: ShiftService;

  constructor(service: ShiftService) {
    this.service = service;
  }

  createShift = async (
    req: Request<Prisma.ShiftCreateInput>,
    res: Response
  ) => {
    try {
      const shift = await this.service.addShift(req.body);
      return res.status(201).send(shift);
    } catch (error) {
      return res.status(500).json({ error: `Internal Server Error: ${error}` });
    }
  };

  getShifts = async (_: Request, res: Response) => {
    try {
      const shifts = await this.service.getShifts();
      return res.status(200).send(shifts);
    } catch (error) {
      return res.status(500).json({ error: `Internal Server Error: ${error}` });
    }
  };

  getShift = async (req: Request, res: Response) => {
    try {
      const { shiftId } = req.params;
      const shift = await this.service.getShift(shiftId);
      return res.status(200).send(shift);
    } catch (error) {
      return res.status(500).json({ error: `Internal Server Error: ${error}` });
    }
  };
}

export default ShiftController;
