const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env || 'amomeucachorro';

const configJWT = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = ({ email, password }) => jwt.sign({ email, password }, JWT_SECRET, configJWT);

const authToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const JWTdata = jwt.verify(token, JWT_SECRET);
    req.user = JWTdata;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  generateToken,
  authToken,
};