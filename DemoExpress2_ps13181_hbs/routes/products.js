var express = require('express');
var router = express.Router();
var auth = require('../utilities/auth');
var upload = require('../utilities/upload');
var productController = require('../controller/productController');
var categoryController = require('../controller/categoryController');
var userController = require('../controller/userController');

router.get("/products-send", async function(req, res){
  let listProducts = await productController.getListProducts();
  res.send(listProducts);
});

router.use(auth.authenticate); // check login for all


/* Calculator. */
router.get("/cal", function (req, res, next) {
  res.render("calculation");
});

// /* GET home page. */
router.get("/", async function (req, res, next) {
  let listSP = await productController.getListProducts()
  res.render("products", { listSP });
});

var middle = [upload.single('imgProduct')]
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Insert product
/* GET add new. */
router.get("/add_new", async function (req, res, next) {
  let loaiSP = await categoryController.getListCategories();
  res.render("add_new", { loaiSP });
});

router.post('/add_new', middle, async function(req, res, next){
  // req.body = {...req.body, imgProduct: 'images/' + req.file.originalname}
  let { body } = req
  if (req.file)
  {
    let imgUrl = req.file.originalname
    body = {...body, imgProduct: imgUrl}
  }
  await productController.addNew(body)
  res.redirect('/products')

});// >>> End Insert Product

// >>> Category
router.get("/category", async function(req, res){
  let listCategories = await categoryController.getListCategories();
  res.render("category", { listCategories });
});

// Add new category
router.get("/add_category", function(req, res){
  res.render("/products/add_category");
});

router.post('/add_category', async function(req, res, next){
  let { body } = req
  await categoryController.addNew(body);
  res.redirect('/products/category');
});

router.get("/edit_category/:id", async function (req, res, next) {
  let id = req.params.id;
  let loaiSP = await categoryController.getCategoryByID(id);
  res.render('/products/category/edit_category', {categoriesEdit: loaiSP});
});
/* Submit update product. */
router.post("/edit_category/:id", async function (req, res, next) {
  let { id } = req.params;
  let { body } = req
  await categoryController.edit(id, body)
  res.redirect('/category')
});

/* Delete product. */
router.delete("/delete/:id", async function (req, res, next) {
  let {id} = req.params
  await categoryController.remove(id)
  res.send({res: true})
});
// << End Category


/* Login. */
router.get('/login', async function (req, res, next) {
  let users = await userController.getAllUser();
  console.log("users >>> ", users);
  res.render("login");
});
/* Get Register. */
router.get("/register", async function(req, res){
  let allUser = await userController.getAllUser()
  console.log("Get All User >>>", allUser)
  res.render("register");
});

router.post('/register', async function(req, res, next){
  let { body } = req
  await userController.addNew(body);
  res.redirect('/products/register');
});

/* Update product. */
router.get("/update/:id", middle, async function (req, res, next) {
  let id = req.params.id;
  let pros = await productController.getProductByID(id);
  let loaiSP = await categoryController.getListCategories();
  res.render('update', {productEdit: pros, loaiSP});
});


/* Submit update product. */
router.post("/update/:id", middle, async function (req, res, next) {
  let { id } = req.params;
  let { body } = req
  if (req.file) 
  {
    let imgUrl = req.file.originalname
    body = {...body, imgProduct: imgUrl}
  }
  await productController.edit(id, body)
  res.redirect('/products')

});

/* Delete product. */
router.delete("/delete/:id", async function (req, res, next) {
  let {id} = req.params
  await productController.remove(id)
  res.send({res: true})
});



module.exports = router;
