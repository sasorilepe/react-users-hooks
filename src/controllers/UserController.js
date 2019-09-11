const userService = require('../services/UserService');

const getSettings = (user, method) => {
  return {
    method,
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};

const getAllUsers = () => userService.getAll();

const createNewUser = user => {
  const settings = getSettings(user, 'POST');
  return userService.createOne(settings);
};

const updateUser = user => {
  const settings = getSettings(user, 'PUT');
  return userService.modifyOne(user.id, settings);
};

const deleteUser = userId => {
  const settings = getSettings({}, 'DELETE');
  return userService.modifyOne(userId, settings);
};

export {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
};