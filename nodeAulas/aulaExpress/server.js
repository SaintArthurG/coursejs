const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

//CRUD -> CREATE,    READ,    UPDATE,    DELETE
//          POST      GET       PUT      DELETE

// http://meusite.com/ <- GET -> Entrega a pagina



app.get('/', (req, res) => {
   res.send(`
    <form action="/form" method="POST">
    Nome: <input type="text" name="name">
    LNome: <input type="text" name="lname">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/test/:idUser?/:pass?', (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.face);
});

app.post('/form', (req, res) => {
    console.log(req.body);    
    res.send(req.body.name);
})

app.listen(3000, ()=> {
    console.log('-> http://localhost:3000');    
    console.log('Server executing on port 3000');
    
});