const { User } = require('../models');

const create = async (displayName, email, password, image) => {
  const findUser = await User.findOne({
    where: { email },
  });
  // console.log(email);
  if (findUser) {
    return { status: 409, message: 'User already registered' };
  }
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

const getOne = async (req) => {
  const findUser = await User.findOne({
    where: { id: req.params.id },
    attributes: { exclude: 'password' },
  });
  if (!findUser) {
    return { status: 404, message: 'User does not exist' };
  }
  return findUser;
};

module.exports = {
  create,
  getAll,
  getOne,
};
