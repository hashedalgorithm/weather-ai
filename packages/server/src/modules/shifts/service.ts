import { Prisma, PrismaClient, Shift } from '../../generated/prisma';

class ShiftService {
  private prismaClient = new PrismaClient();

  constructor() {}

  addShift = async (data: Prisma.ShiftCreateInput) => {
    const shift = await this.prismaClient.shift.create({
      data,
    });
    return shift;
  };

  getShifts = async () => this.prismaClient.shift.findMany();

  getShift = async (shiftId: Shift['shiftId']) => {
    this.prismaClient.shift.findUnique({
      where: { shiftId },
    });
  };
}

export default ShiftService;
