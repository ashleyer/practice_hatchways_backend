const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));




// var express = require("express");
// var app = express();



// app.use(express.json());



// app.get('/recipes', (request, response) => {
//     response.json(recipes);
// });

// app.get('/recipes/:id', (request, response) => {
//     const recipeId = Number(request.params.id);
//     const getRecipe = recipes.find((recipe) => recipe.id === recipeId);

//     if (!getRecipe) {
//         response.status(500).send('Recipe not found.')
//     } else {
//         response.json(getRecipe);
//     }
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });