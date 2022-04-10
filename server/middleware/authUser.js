import mongoose from "mongoose";
import User from "../models/user.js"

const MONTH = 30 * 24 * 60 * 60 * 1000;

const authUser = async (req,res,next)=>{
  const {userId, updateKey} = JSON.parse(req.headers.authid)
  try {
    const user = await User.find({userId, updateKey})
    console.log(user[0]._id)
    const expirationDate = new Date(new Date().getTime() + MONTH); 
    user.length && await User.findByIdAndUpdate(
      user[0]._id,
      {
        ...user,
        expirationDate
      }
    )
    console.log(user.length)
    user.length && next()
  } catch (error) {
    console.log(error)
  }
}

export default authUser;