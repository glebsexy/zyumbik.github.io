window.onload = function() {
	// var cells = document.getElementsByClassName("cell");

	// Page reload indicator
	document.getElementById("game").style = "background-color: #ffffff;";

	var cells = document.getElementsByClassName("cell");

	// var cross = "<div class=\"cross game-element\"></div>";
	// var circle = "<div class=\"circle game-element\"></div>";

	for (var i = 0; i < cells.length; i++) {
		(function() {
			cells[i].addEventListener("click", function() { insertGameElement(this); }, false);
		}());
	}

}

function insertGameElement (cell) {
	var gameElement = document.createElement("div");
	gameElement.className = "circle game-element";
	cell.appendChild(gameElement);
	cell.removeEventListener("click", function() { insertGameElement(this); }, false);
}