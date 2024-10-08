import express from "express";
import cors from "cors";
import morgan from "morgan";
import color from "chalk";
import { connect } from "./db/conecctions.js";
const app = express();
app.use(morgan("dev"));
app.use(cors());

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
