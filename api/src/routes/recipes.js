const { Router } = require("express"); /////PARA PODER HACER EXPRESS.ROUTER////

const recipes = Router();


// [ ] GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
recipes.get("/", (req, res)=> {
    res.send("Estoy en las rutas de recipes")
});

// [ ] GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

module.exports = recipes; //// PONE A DISPOSICIÓN PARA QUE LO IMPORTE INDEX EN CARPETA ROUTES