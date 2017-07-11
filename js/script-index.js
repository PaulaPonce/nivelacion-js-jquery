$(document).ready( function(){
	//Oculta la flecha cuando se muestra index.html
	$(".js-back").hide();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	//La variable "recipesArray" esta declarada en el archivo "data/activities.js"
	renderActivities(activitiesArray);
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

			//crea el HTML templates/template-recipe.html con el parámetro que cumple la condición
			$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">' + recipe.title + '</span><span class="metadata-recipe"><span class="author-recipe">' + recipe.source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span> </span></span></span><img src="img/recipes/320x350/' + recipe.name + '.jpg"/></a>');
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
	//Recorre el arreglo activitiesArray y por cada objeto llama a la función renderActivity
	activitiesArray.forEach(function(recipe){
		renderActivity(recipe);
	});
	//Validación
	if(activitiesArray.length>0){
		return $(".wrapper-message").hide();
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	console.log(recipe);
	// set up underscore template variable
	_.templateSettings.variable = 'activity'; //template variable
	// this is what hooks into the template in the HTML above
	var template = _.template(
		$("script.template").html()
	);
	$(".list-activities").append(template(recipe));	
}



