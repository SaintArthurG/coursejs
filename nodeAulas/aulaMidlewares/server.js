const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware')


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


//nossos proprios middlewares
app.use(middlewareGlobal)

app.use(routes);

//CRUD -> CREATE,    READ,    UPDATE,    DELETE
//          POST      GET       PUT      DELETE

// http://meusite.com/ <- GET -> Entrega a pagina


app.listen(3000, ()=> {
    console.log('-> http://localhost:3000');    
    console.log('Server executing on port 3000');
    
});

//mongodb+srv://arthur:
// <db_password>@cursojs01.8agf2.mongodb.net/
// ?retryWrites=true&w=majority&appName=cursojs01

//user arthur
//password arthurcurso