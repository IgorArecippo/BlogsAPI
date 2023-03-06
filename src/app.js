const express = require('express');
const loginController = require('./controllers/loginController');
const { valiEmail, valiLogin, valiName, valiPassword } = require('./middlewares/validations');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const postController = require('./controllers/postController');
const { authToken } = require('./middlewares/jwt');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', valiLogin, loginController.loginGet);
app.post('/user', valiEmail, valiName, valiPassword, userController.create);
app.get('/user', authToken, userController.getAll);
app.get('/user/:id', authToken, userController.getOne);
app.post('/categories', authToken, categoryController.create);
app.get('/categories', authToken, categoryController.getAll);
app.get('/post', authToken, postController.getAll);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
