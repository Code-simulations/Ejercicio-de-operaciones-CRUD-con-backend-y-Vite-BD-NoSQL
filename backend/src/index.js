import express from "express";
import cors from "cors";
import morgan from "morgan";
import color from "chalk";

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.listen(4000, () => {
  console.log(color("server running on port: 4000"));
});
