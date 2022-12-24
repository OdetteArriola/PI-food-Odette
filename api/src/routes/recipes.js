const { Router } = require("express"); /////PARA PODER HACER EXPRESS.ROUTER////
const { getAllRecipes } = require("./../controllers/controllers.js");
const recipes = Router();


// [ ] GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
recipes.get("/", async (req, res) => {
    try {
      const name = req.query.name;
      let totalRecipes = await getAllRecipes();
      if (name) {
        let recipesByName = await totalRecipes.filter((e) =>
          e.title.toLowerCase().includes(name.toLowerCase())
        );
  
        recipesByName.length
          ? res.status(200).json(recipesByName)
          : res.status(200).json([]);
      } else {
        res.status(200).json(totalRecipes);
      }
    } catch (error) {
      res.status(400).send("¡Oooops! La receta que buscas no se encuentra disponible");
    }
  });

// [ ] GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados

module.exports = recipes; //// PONE A DISPOSICIÓN PARA QUE LO IMPORTE INDEX EN CARPETA ROUTES