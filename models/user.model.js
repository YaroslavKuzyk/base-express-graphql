import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  id: { type: Number },
  username: { type: String },
  age: { type: Number },
});

export default mongoose.model("userModel", userModel);
