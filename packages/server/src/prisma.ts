import { PrismaClient } from "./generated/prisma/edge";
import { Pool, neonConfig } from "@neondatabase/serverless";

import { PrismaNeon } from "@prisma/adapter-neon";

// const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

export default prisma;
