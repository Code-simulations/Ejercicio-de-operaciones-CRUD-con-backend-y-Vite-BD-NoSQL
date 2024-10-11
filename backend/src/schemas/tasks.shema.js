import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});

const tasks = mongoose.model("Tasks", taskSchema);
export default tasks;
