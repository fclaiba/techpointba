//Modules

const express = require('express');
const app = express();
const path= require('path');
const methodOverride = require('method-override')

const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter');

//Configuration
app.use(express.static(__dirname + '/../public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.json())

//Template Engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo puerto 3000');
})

app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter);






