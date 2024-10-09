import mongoose from "mongoose";

const userModels = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const user = mongoose.model("Users", userModels);
export default user;
