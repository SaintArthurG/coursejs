const express = require('express');
const app = express();
const routes = require('./routes');


app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)
app.use(routes);

//CRUD -> CREATE,    READ,    UPDATE,    DELETE
//          POST      GET       PUT      DELETE

// http://meusite.com/ <- GET -> Entrega a pagina


app.listen(3000, ()=> {
    console.log('-> http://localhost:3000');    
    console.log('Server executing on port 3000');
    
});