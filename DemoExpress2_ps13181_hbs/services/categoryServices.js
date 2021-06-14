var CategoryModel = require('../model/categoryModel');


exports.getListCategories = async function getListCategories()
{
    return await CategoryModel.find()
}

exports.addNew = async function addNew(category_push) {
    let categories = new CategoryModel(category_push);
    await categories.save();
}

exports.edit = async function editCategory(category_edit){
    let categoryEdit = await CategoryModel.findById(category_edit.id);
    if (categoryEdit){
      categoryEdit.nameCategory = category_edit.nameCategory
      await categoryEdit.save();
    }
  }

  exports.remove = async function removeCategoryByID(id){
    await CategoryModel.remove({_id: id});
  }
