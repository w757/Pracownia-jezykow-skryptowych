import express from "express";
import Product from "../models/productModel.js";
import mongoose from "mongoose";
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      console.log("djhs");
      return res.status(404).send({ message: "Invalid Product ID" });
    }

    const product = await Product.findById(req.params.id);
    console.log(product);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "An error occurred" });
  }
});

export default productRouter;
