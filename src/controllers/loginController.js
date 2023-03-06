const loginService = require('../services/loginService');
const { generateToken } = require('../middlewares/jwt');

const loginGet = async (req, res) => {
  const token = await loginService.findOne(req.body);
  // console.log(token);
  if (token.status) {
    return res.status(token.status).json({ message: token.message });
  }
  const showToken = generateToken(token.message);
  return res.status(200).json({ token: showToken });
};

module.exports = { loginGet };