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

var currentPlayer = "cross";

function insertGameElement (cell) {
	if (cell.innerHTML === "") { 
		var gameElement = document.createElement("div");
		gameElement.className = currentPlayer + " game-element";
		switchPlayer();
		cell.appendChild(gameElement);
	}
}

function switchPlayer () {
	if (currentPlayer === "cross") {
		currentPlayer = "circle";
	} else {
		currentPlayer = "cross";
	}
}