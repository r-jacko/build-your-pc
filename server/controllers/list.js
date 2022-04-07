import mongoose from "mongoose";
import Element from "../models/element.js";

export const getList = async (req,res)=>{
  try {
    const elements = await Element.find();
    res.status(200).json({data: elements})
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const createElement = async (req,res)=>{
  const element = req.body;
  const newElement = new Element({
    ...element
  })
  try {
    await newElement.save();
    res.status(201).json(newElement)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const updateElement = async (req,res)=>{
  const {id: _id} = req.params;
  const element = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");
  const updatedElement = await Element.findByIdAndUpdate(
    _id,
    {...element, _id},
    {new:true}
  );
  res.status(200).json(updatedElement);
}