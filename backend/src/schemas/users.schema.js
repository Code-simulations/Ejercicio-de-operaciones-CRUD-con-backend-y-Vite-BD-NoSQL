import mongoose from "mongoose";
// mongoose.use()
const userModels = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tasks" }],
});

const user = mongoose.model("Users", userModels);
export default user;
