$(document).ready(function(){
	console.log("Documento listo");
	//Oculta el menú cuando se muestra recipe.html
	$(".js-menu").hide();

	/*
	* Función que quita la clase make a div
	* Añade clase active a pestaña js-show-recipe y se la quita a pestaña js-show-make
	*/
	$(".js-show-recipe").on("click", function(){
		$(this).addClass("active");
		$(".js-show-make").removeClass("active");
		$("div.recipe").removeClass("make");
	});

	/*
	* Función que agrega la clase make a div
	* Añade clase active a pestaña js-show-make y se la quita a pestaña js-show-recipe
	*/
	$(".js-show-make").on("click", function(){
		$(this).addClass("active");
		$(".js-show-recipe").removeClass("active");
		$("div.recipe").addClass("make");
	});
});

	
