import ShiftController from "@/server/shifts/controller";
import ShiftModule from "@/server/shifts/module";
import { type NextRequest, NextResponse } from "next/server";

const module = ShiftModule;

export async function GET(request: NextRequest) {
  return await module.controller.getShifts();
}

export async function POST(request: NextRequest) {
  return await module.controller.createShift(request);
}
