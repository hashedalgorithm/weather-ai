import { Hono } from "hono";
import prisma from "../prisma";
// import { PrismaClient } from "../generated/prisma";
// import { withAccelerate } from "@prisma/extension-accelerate";

const routeShifts = new Hono();

routeShifts.get("/", async (c) => {
  try {
    const shifts = await prisma.shift.findMany({});
    return c.json(shifts, 200);
  } catch (error) {
    return c.json({ error: `${error}` }, 500);
  }
});

export default routeShifts;
