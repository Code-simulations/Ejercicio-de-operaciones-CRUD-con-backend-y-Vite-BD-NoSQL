import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  isCompleted: { type: Boolean, require: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const tasks = mongoose.model("tasks", taskSchema);
export default tasks;
