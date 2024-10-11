import Router from "express";
import { creatorTasks, deledTasks, getAllTasks } from "../controllers/tasks.controllers.js";
import validatorJwt from "../middlewares/validatorToken.js";
const tasksRouter = Router();
tasksRouter.post("/tasks", validatorJwt, creatorTasks);
tasksRouter.get("/tasks", validatorJwt, getAllTasks);
tasksRouter.delete("/tasks/:_id", validatorJwt, deledTasks);
export default tasksRouter;
