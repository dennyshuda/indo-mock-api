import { Hono } from "hono";
import { logger } from "hono/logger";
import { v1 } from "./routes/v1";

const app = new Hono();

app.use("*", logger());

app.route("/v1", v1);

app.get("/", (c) => c.text("Indo-Mock API is Running! 🇮🇩"));

export default app;
