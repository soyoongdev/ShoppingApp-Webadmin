var categoryServices = require('../services/categoryServices');

exports.getListCategories = async function getListCategories(){
    return await categoryServices.getListCategories()
}
exports.getCategoryByID = async function getCategoryByID(id){
    return await categoryServices.getCategoryByID(id);
}

exports.addNew = async function addNew(params) {
    let {nameCategory} = params
    let categories = {
        nameCategory: nameCategory,
    }
    await categoryServices.addNew(categories);
}

exports.edit = async function editCategory(id, params){
    let {nameCategory} = params
    let category = {id, nameCategory}
    await categoryServices.edit(category)
}
exports.remove = async function removeCategoryByID(id_del){
    await categoryServices.remove(id_del)
}