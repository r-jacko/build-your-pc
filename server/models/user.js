import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userId: String,
  updateKey: String,
  expirationDate: String,
})

const User = mongoose.model('User', userSchema);
export default User;