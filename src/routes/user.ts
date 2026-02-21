import { Hono } from "hono";
import { getUser } from "../controllers/user-controller";

const userRoute = new Hono();

userRoute.get("/", getUser);

export default userRoute;
