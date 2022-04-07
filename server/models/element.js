import mongoose from "mongoose";

const elementSchema = mongoose.Schema({
  elementName: String,
  category: String,
  elementModel: String,
  description: String,
  quantity: String,
  price: String,
  creator: String,
})

const Element = mongoose.model("Element", elementSchema);

export default Element;