import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true, unique: false },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  id: { type: String, required: true, unique: false },
  description: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
