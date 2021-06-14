var express = require("express");
var router = express.Router();
var jwt = require('jsonwebtoken');
var auth = require('../utilities/auth');
var userController = require('../controller/userController');

/* Product views */
router.get('/', auth.authenticate, function (req, res, next) {  
  res.redirect('/products');
});

/* LOGIN */
router.get('/login', function (req, res, next) {
  res.render('login');
});
/* Register */
router.get('/register', function (req, res, next) {
  res.render('register');
});

/* CHECK LOGIN */
router.post('/login', async function (req, res, next) {
  let {username, password} = req.body
  let user = await userController.login(username, password)
  if (user) {
    var token = jwt.sign({user}, process.env.JWT_KEY);
    req.session.token = token
    res.redirect('/products')
  }else{
    res.redirect('/login')
  }
});

// LOGOUT
router.get('/logout', function (req, res, next) {
  req.session.destroy(function(err) {
    // cannot access session here
    res.render('login');
  })
  
});



module.exports = router;
