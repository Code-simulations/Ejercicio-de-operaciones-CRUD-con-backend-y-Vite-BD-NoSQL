import Router from "express";
import { creatorTasks, getAllTasks } from "../controllers/tasks.controllers.js";
import validatorJwt from "../middlewares/validatorToken.js";
const tasksRouter = Router();
tasksRouter.post("/tasks", validatorJwt, creatorTasks);
tasksRouter.get("/tasks", validatorJwt, getAllTasks);
export default tasksRouter;
