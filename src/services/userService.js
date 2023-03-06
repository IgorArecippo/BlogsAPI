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

module.exports = {
  create,
};
