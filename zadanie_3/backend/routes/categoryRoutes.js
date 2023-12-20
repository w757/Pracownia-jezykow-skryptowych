import express from "express";
import Product from "../models/productModel.js";

const categoryRouter = express.Router();


categoryRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// categoryRouter.get("/category/:category", async (req, res) => {
//     const product = await Product.findOne({ category: req.params.category });

//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found" });
//   }
// });
// categoryRouter.get("/:category", async (req, res) => {
//   const product = await Product.findById(req.params.category);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found" });
//   }
// });

categoryRouter.get("/:category", async (req, res) => {
    try {
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
