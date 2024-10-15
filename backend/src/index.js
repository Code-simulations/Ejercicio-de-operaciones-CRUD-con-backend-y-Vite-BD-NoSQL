import express from "express";
import cors from "cors";
import morgan from "morgan";
import color from "chalk";
import cookiesParser from "cookie-parser";
import { connect } from "./db/conecctions.js";
import userRouter from "./routers/users.routes.js";
import tasksRouter from "./routers/tasks.routes.js";
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173", // Cambia esto al origen de tu frontend
    credentials: true,
  })
);
app.use(cookiesParser());
app.use(userRouter);
app.use(tasksRouter);

app.listen(4000, () => {
  try {
    connect();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.cyanBright("                                  server running on port: 4000"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  } catch (error) {
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                                  Error en el servidor "));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(color.yellow(error));
    console.log();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  }
});
