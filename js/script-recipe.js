$(document).ready(function(){
	console.log("Documento listo");
	//Oculta el menú cuando se muestra recipe.html
	$(".js-menu").hide();

	/*
	* Función que quita la clase make a div
	*/
	$(".js-show-recipe").on("click", removeMakeClass);
	function removeMakeClass(){
		$("div.recipe").removeClass("make");
	}

	/*
	* Función que agrega la clase make a div
	*/
	$(".js-show-make").on("click", addMakeClass);
	function addMakeClass(){
		$("div.recipe").addClass("make");
	}
});

	
