const { Router } = require("express"); /////PARA PODER HACER EXPRESS.ROUTER////

const types = Router();

types.get("/", (req, res)=> {
    res.send("Estoy en las rutas de types")
});

module.exports = types; //// PONE A DISPOSICIÓN PARA QUE LO IMPORTE INDEX EN CARPETA ROUTES