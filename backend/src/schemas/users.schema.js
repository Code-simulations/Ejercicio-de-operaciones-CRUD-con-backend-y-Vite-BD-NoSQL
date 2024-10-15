import mongoose from "mongoose";

const userModels = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "tasks" }],
});

const user = mongoose.model("users", userModels);
export default user;
