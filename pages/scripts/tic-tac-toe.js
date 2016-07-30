window.onload = function() {
	// var cells = document.getElementsByClassName("cell");

	// Page reload indicator
	document.getElementById("game").style = "background-color: #ffffff;";

	var cells = document.getElementsByClassName("cell");

	// var cross = "<div class=\"cross game-element\"></div>";
	// var circle = "<div class=\"circle game-element\"></div>";

	for (var i = 0; i < cells.length; i++) {
		cells[i].onclick = function() {
			var cell = document.getElementById(this.id);
			var gameElement = document.createElement("div");
			gameElement.className = "circle game-element";
			cell.appendChild(gameElement);
		};
	};

}
