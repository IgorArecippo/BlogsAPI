const valiLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

const valiName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName) {
    return res.status(400).json(
      { message: 'the field "displayName" is required' },
    );
  }

  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  next();
};

const valiPassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json(
      { message: '"password" length must be at least 6 characters long' },
    );
  }
  next();
};

const valiEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
  if (!email) {
    return res.status(400).json(
      { message: 'the field "email" is required' },
    );
  }

  if (email.match(regex) === null) {
    return res.status(400).json(
      { message: '"email" must be a valid email' },
    );
  }
  next();
};

module.exports = {
  valiLogin,
  valiName,
  valiPassword,
  valiEmail,
};