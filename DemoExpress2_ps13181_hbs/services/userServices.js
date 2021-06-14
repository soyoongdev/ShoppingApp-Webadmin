var userModel = require('../model/userModel');

exports.getAllUser = async function getAllUser()
{   let users = await userModel.find()
    return users
}

exports.addUser = async function addUser(userAdd) {
    let users = new userModel(userAdd);
    await users.save();
}

exports.login = async function login(username, password){
    let users = userModel.findOne({username: username, password: password});
    return await users
}