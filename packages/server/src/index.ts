import { Hono } from "hono";
import { cors } from "hono/cors";
import routeShifts from "./routes/shifts";

const app = new Hono();

// Apply CORS middleware
app.use(
  "/api/*",
  cors({
    origin: "*", // Allow all origins. Adjust this as needed for security.
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app.route("/shifts", routeShifts);

export default app;
