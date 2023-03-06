const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env || 'amomeucachorro';

const configJWT = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = ({ email, password }) =>
  jwt.sign({ email, password }, JWT_SECRET, configJWT);

const authToken = async (token) => {
  if (!token) {
    const error = new Error('missing auth token');
    error.status = 401;
    throw error;
  }

  try {
    const JWTdata = await jwt.verify(token, JWT_SECRET);
    return JWTdata;
  } catch (err) {
    const error = new Error('jwt malformed');
    error.status(401);
    return error;
  }
};

module.exports = {
  generateToken,
  authToken,
};