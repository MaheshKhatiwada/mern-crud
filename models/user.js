import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 5,
    max: 255,
    required,
  },
  email: {
    type: String,
    min: 5,
    max: 255,
    required,
  },
  password: {
    type: String,
    min: 6,
    max: 1024,
    required,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
