import User from "../models/user.js";
const MONTH = 30*24*60*60*1000;

export const registerNewUser = async(req,res)=>{
  const profile = req.body;
  const expirationDate = new Date(new Date().getTime() + MONTH);
  const newUser = new User({
    ...profile,
    expirationDate
  });
  try {
    await newUser.save();
    res.status(201)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}