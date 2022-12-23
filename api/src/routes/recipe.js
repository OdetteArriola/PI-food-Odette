const { Router } = require("express"); /////PARA PODER HACER EXPRESS.ROUTER////

const recipe = Router();

recipe.get("/", (req, res)=> {
    res.send("Estoy en las rutas de recipe")
});


module.exports = recipe;