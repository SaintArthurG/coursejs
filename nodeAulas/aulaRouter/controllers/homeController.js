//criar um controler para cada funcionalidade
exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="name">
        LNome: <input type="text" name="lname">
        <button>Enviar</button>
        </form>
        `);
}

exports.trataPost = (req, res) => {
    res.send('Nova ROTA DE POST');
}