$(document).ready( function(){
	//Oculta la flecha cuando se muestra index.html
	$(".js-back").hide();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

/*
* Función que se encarga de pintar una noticia en el párrafo que está dentro de NEWS
*/
function printNews(){
	$(".callout-news p").append("NUEVAS RECETAS");
}
printNews();

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	
	var foundTrue = false;
	//Recorrer el arreglo recipesArray
	recipesArray.forEach(function(recipe){
		if(recipe.highlighted){
			foundTrue = true;
			//llama a la función renderRecipe con el parámetro que cumple la condición
			renderRecipe(recipe);
		}
	});
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


