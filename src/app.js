const express = require('express');
const loginController = require('./controllers/loginController');
const { valiEmail, valiLogin, valiName, valiPassword } = require('./middlewares/validations');
const userController = require('./controllers/userController');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', valiLogin, loginController.loginGet);
app.post('/user', valiEmail, valiName, valiPassword, userController.create);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
