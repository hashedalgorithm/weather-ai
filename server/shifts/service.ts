import {
  type Prisma,
  type Shift,
  PrismaClient,
} from "@/types/generated/prisma";

class ShiftService {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  addShift = async (data: Prisma.ShiftCreateInput) => {
    const shift = await this.prismaClient.shift.create({
      data,
    });
    return shift;
  };

  getShifts = async () => this.prismaClient.shift.findMany();

  getShift = async (shiftId: Shift["shiftId"]) => {
    this.prismaClient.shift.findUnique({
      where: { shiftId },
    });
  };
}

export default ShiftService;
