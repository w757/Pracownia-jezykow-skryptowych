import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("conected to database");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

const app = express();

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/category", categoryRouter);

app.get("/api/log-in", async (req, res) => {
  res.send();
});

app.get("/api/about-us", async (req, res) => {
  res.send();
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server at http://localhost:${port}");
});
