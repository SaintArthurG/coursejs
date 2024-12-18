exports.middlewareGlobal = (req, res, next)=> {
    console.log();

    if(req.body.cliente) {
        console.log(`VI QUE VOCE POSTOU ${req.body.cliente}`);
    }
    console.log();

    next();    
};

exports.outroMiddleware = (req, res, next) => {
    console.log(req.body);
};