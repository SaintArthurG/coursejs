const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');


app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

//CRUD -> CREATE,    READ,    UPDATE,    DELETE
//          POST      GET       PUT      DELETE

// http://meusite.com/ <- GET -> Entrega a pagina


app.listen(3000, ()=> {
    console.log('-> http://localhost:3000');    
    console.log('Server executing on port 3000');
    
});