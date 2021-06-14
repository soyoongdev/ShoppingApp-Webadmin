var express = require("express");
var router = express.Router();

var productController = require('../controller/productController');
var categoryController = require('../controller/categoryController');

/* List product */
router.get("/products", function (req, res, next) {
  let listProduct = productController.getListProducts();
  let listCategory = categoryController.getListCategories();
  res.send({ listProduct, listCategory });
});



// api list products
router.get("/products/:id", function (req, res, next) {
  let {id} = req.params.id
  let product = productController.getProductByID(id)
  res.send({product});
});


module.exports = router;
