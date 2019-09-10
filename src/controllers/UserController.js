const userService = require('../services/UserService');

const getAllUsers = () => userService.getAll();

export {
  getAllUsers
};