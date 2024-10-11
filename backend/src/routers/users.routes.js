import Router from "express";
import validatorJwt from "../middlewares/validatorToken.js";
import { login, register, session } from "../controllers/controller.user.js";
const userRouter = Router();
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/session", validatorJwt, session);
export default userRouter;
