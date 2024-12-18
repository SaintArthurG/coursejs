//criar um controler para cada funcionalidade
exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send('Nova ROTA DE POST');
}