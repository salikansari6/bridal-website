const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/product");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://salik:pclover@cluster0.dozld.mongodb.net/biyahspecials?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(4000, () => {
  console.log("server running on port 4000");
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

app.get("/product/:id", async (req, res) => {
  const product = await Product.find({ id: req.params.id });
  res.json(product);
});
