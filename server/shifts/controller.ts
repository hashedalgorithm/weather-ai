import type { Shift } from "@/types/generated/prisma";
import { NextRequest } from "next/server.js";
import ShiftService from "./service.js";

class ShiftController {
  private service: ShiftService;

  constructor(service: ShiftService) {
    this.service = service;
  }

  createShift = async (req: NextRequest) => {
    try {
      const body = req.body as unknown as Shift;

      const shift = await this.service.addShift(body);
      return Response.json(shift, {
        status: 201,
      });
    } catch (error) {
      return Response.json(
        { error: `Internal Server Error: ${error}` },
        {
          status: 500,
        }
      );
    }
  };

  getShifts = async () => {
    try {
      const shifts = await this.service.getShifts();
      return Response.json(shifts, {
        status: 200,
      });
    } catch (error) {
      return Response.json(
        { error: `Internal Server Error: ${error}` },
        {
          status: 500,
        }
      );
    }
  };

  getShift = async (shiftId: string) => {
    try {
      if (isNaN(parseInt(shiftId)))
        return Response.json(
          { error: `Internal Server Error: Invalid parameter` },
          {
            status: 500,
          }
        );
      const parsedShiftId = parseInt(shiftId);

      const shift = await this.service.getShift(parsedShiftId);
      return Response.json(shift, {
        status: 200,
      });
    } catch (error) {
      return Response.json(
        { error: `Internal Server Error: ${error}` },
        {
          status: 500,
        }
      );
    }
  };
}

export default ShiftController;
