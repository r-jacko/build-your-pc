import mongoose from "mongoose";
import User from "../models/user.js";

const MONTH = 30 * 24 * 60 * 60 * 1000;

const updateExpirationDate = async (req, res, next) => {
  const expirationDate = new Date(new Date().getTime() + MONTH);
  const { userId } = JSON.parse(req.headers.authid);
  try {
    const user = await User.findOneAndUpdate(
      { userId },
      {
        $set: { expirationDate },
      }
    );
    next();
  } catch (error) {
    console.log(error);
  }
};

export default updateExpirationDate;
