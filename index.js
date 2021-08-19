const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/product");
const path = require("path");
const app = express();

require("dotenv").config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get(["*"], (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("server is working");
  });
}
