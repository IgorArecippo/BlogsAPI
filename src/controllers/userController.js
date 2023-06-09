const userService = require('../services/userService');
const { generateToken } = require('../middlewares/jwt');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  // const token = await userService.create(req.body);
  // if (token.status) { 
  //   return res.status(token.status).json({ message: token.message });
  // }
  const newUser = await userService.create(displayName, email, password, image);
  console.log(newUser);
  const showToken = generateToken(email, password);
  if (newUser.status === 409) {
    return res.status(409).json({ message: newUser.message });
  }
  return res.status(201).json({ token: showToken });
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  
  // console.log(users);
  return res.status(200).json(users);
};

const getOne = async (req, res) => {
  const user = await userService.getOne(req);
  if (user.status === 404) {
    return res.status(404).json({ message: user.message });
  }
  return res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getOne,
};