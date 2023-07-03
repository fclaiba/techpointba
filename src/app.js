// Modules
const express = require('express');
const app = express();

const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');

// Configuration
app.use(express.static(__dirname + '/../public'));

// Template Engine
app.set('view engine', 'ejs');

// Rutas
app.use('/', mainRouter);
app.use('/user', userRouter);

// Iniciar el servidor
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
