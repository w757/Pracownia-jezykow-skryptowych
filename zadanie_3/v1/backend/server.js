import express from "express";
import data from "./data.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';


dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
.then(() =>{
console.log('conected to database');
})
.catch((err) => {
    console.log(err.message);
    process.exit(1);
});

const app = express();

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

// app.get('/api/company', (req, res) => {
//   res.send(data.products);                    //to do
// });

// app.get('/api/about-us', (req, res) => {
//   res.send(data.products);                    //to do
// });



// app.get('/api/products/id/:id', (req, res) => {
//     const product = data.products.find((x) => x.id === req.params.id);
//     if (product) {
       
//         res.send(product);
//     }
//     else{
//         res.status(404).send({message: "404 Not Found"});
//     }
//   });

  // app.get('/api/products/category/:category', (req, res) => {
  //   const product = data.products.find((x) => x.category === req.params.category);
  //   if (product) {
       
  //       res.send(product);
  //   }
  //   else{
  //       res.status(404).send({message: "404 Not Found"});
  //   }
  // });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server at http://localhost:${port}");
});
