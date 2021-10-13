const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router
  .route("/")
  .post(productController.addProduct)
  .get(productController.getAllProducts);

module.exports = router;
