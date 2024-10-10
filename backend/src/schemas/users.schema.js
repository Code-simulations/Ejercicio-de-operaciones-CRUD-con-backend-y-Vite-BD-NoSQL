import mongoose from "mongoose";

const userModels = new mongoose.Schema({
  names: { type: String, required: true },
  emails: { type: String, required: true, unique: true },
  passwords: { type: String, required: true },
});

const user = mongoose.model("Users", userModels);
export default user;
