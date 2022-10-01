const express = require('express');
const loginRoute = require('./routes/loginRoutes');
const userRoute = require('./routes/userRoutes');
const categoriesRoute = require('./routes/categoriesRoutes');
const errorMiddleware = require('./middlewares/error');
// ...

const app = express();

app.use(express.json());
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoriesRoute);
app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
