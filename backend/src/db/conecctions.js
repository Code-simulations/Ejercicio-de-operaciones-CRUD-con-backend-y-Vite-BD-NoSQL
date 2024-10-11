import mongoose from "mongoose";
import color from "chalk";
mongoose.set("strictPopulate", false);
export const connect = async () => {
  try {
    const connections = await mongoose.connect("mongodb://localhost:27017/Practica");
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.green("                               database connected successfully"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    return connections;
  } catch (error) {
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log(color.red("                                  Error in database connection"));
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
    console.log();
    console.log(color.yellow(error));
    console.log();
    console.log(color.blue("----------------------------------------------------------------------------------------------------"));
  }
};
