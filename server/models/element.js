import mongoose from "mongoose";

const elementSchema = mongoose.Schema({
  elementName: String,
  category: String,
  elementModel: String,
  description: String,
  quantity: Number,
  price: Number,
  creator: String,
})

const Element = mongoose.model("Element", elementSchema);

export default Element;