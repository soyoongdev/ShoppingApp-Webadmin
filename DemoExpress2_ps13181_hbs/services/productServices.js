var categoryServices = require('./categoryServices');
var ProductModel = require("../model/productModel");

exports.getListProducts = async function getListProducts(){
  let products = await ProductModel.find().populate('idLoaiSP')
    return products;
}

exports.getProductByID = async function getProductByID(id){
    let product = await ProductModel.findById(id)
    // product = {...product, id: product._id}
    return product
}


exports.addNew = async function addNew(product_push) {
    let product = new ProductModel(product_push);
    await product.save();
}

exports.edit = async function editProduct(product_edit){
  let proEdit = await ProductModel.findById(product_edit.id);
  if (proEdit){
    proEdit.productName = product_edit.productName
    proEdit.price = product_edit.price
    proEdit.date = product_edit.date
    proEdit.saleUpTo = product_edit.saleUpTo
    proEdit.idLoaiSP = product_edit.idLoaiSP

    if (product_edit.imgProduct)
    {
      proEdit.imgProduct = product_edit.imgProduct
    }
    await proEdit.save();
  }
}

exports.remove = async function removeProductByID(id){
  await ProductModel.remove({_id: id});
}


