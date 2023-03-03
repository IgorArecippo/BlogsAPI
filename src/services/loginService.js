const { User } = require('../models');

const findOne = async ({ email, password }) => {
  const tokenUser = await User.findOne({
    where: { email, password },
  });
  // console.log(tokenUser);
  if (!tokenUser) {
    return { status: 400, message: 'Invalid fields' };
  }
  return { status: null, message: tokenUser };
};

module.exports = {
  findOne,
};