var userServices = require("../services/userServices");

exports.getAllUser = async function getAllUser() {
  return await userServices.getAllUser();
};

exports.addUser = async function addUser(params) {
  let { username, password, passwordConfirm } = params;
  if (password == passwordConfirm){
    let users = { 
      username: username,
      password: password,
    };
    await userServices.addUser(users);
  }else{
    alert('Có vẻ như mật khẩu của bạn không giống :)');
  }
};

exports.login = async function login(username, password) {
  return await userServices.login(username, password);
};
