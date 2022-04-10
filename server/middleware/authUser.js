import mongoose from "mongoose";
import User from "../models/user.js"

const authUser = async (req,res,next)=>{
  const {userId, updateKey} = JSON.parse(req.headers.authid)
  try {
    const isValidUser = await User.find({userId, updateKey})
    isValidUser.length && next()
  } catch (error) {
    console.log(error)
  }
}

export default authUser;