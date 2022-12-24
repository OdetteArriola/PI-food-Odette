const { Router } = require("express"); /////PARA PODER HACER EXPRESS.ROUTER////
const { Diet } = require("../db");
const axios = require("axios");
const { API_Key } = process.env;
const types = Router();

types.get("/", async (req, res)=> {
    try {
        const info = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_Key}&addRecipeInformation=true&number=100`
        );
        const types = info.data?.results.map((e) => e.diets);
        const newTypes = types.flat().concat("vegetarian", "ketogenic");
        const finalTypes = [...new Set(newTypes)];
    
        console.log("SOY NEW TYPESSSS", newTypes);
        // console.log(dishTypes);
        for (let element in finalTypes) {
          Diet.findOrCreate({
            where: { title: finalTypes[element] },
          });
        }
    
        const newDiets = await Diet.findAll();
        res.status(200).json(newDiets);
      } catch (error) {
        console.log(error);
      }
    });

module.exports = types; //// PONE A DISPOSICIÓN PARA QUE LO IMPORTE INDEX EN CARPETA ROUTES