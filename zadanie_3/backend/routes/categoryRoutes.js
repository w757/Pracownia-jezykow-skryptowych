import express from "express";
import Product from "../models/productModel.js";

const categoryRouter = express.Router();

categoryRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

categoryRouter.get("/:category", async (req, res) => {
  try {
    const isValidId = /[a-fA-F]/.test(req.params.id);
    if (!isValidId) {
      return res.status(404).send({ message: "Invalid ID format" });
    }

    const products = await Product.find({ category: req.params.category });

    if (products && products.length) {
      res.send(products);
    } else {
      res.status(404).send({ message: "Products Not Found in this Category" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default categoryRouter;
