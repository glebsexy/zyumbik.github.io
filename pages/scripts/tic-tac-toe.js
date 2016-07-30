window.onload = function() {
	// var cells = document.getElementsByClassName("cell");

	// Page reload indicator
	document.getElementById("game").style = "background-color: #ffffff;";

	cells = document.getElementsByClassName("cell");

	// var cross = "<div class=\"cross game-element\"></div>";
	// var circle = "<div class=\"circle game-element\"></div>";

	setupField();

};

var cells, currentPlayer, gameState, gameProcess, wins = [0, 0];

function setupField () {
	if (wins[0] === 0 && wins[1] === 0) {
		for (var i = 0; i < cells.length; i++) {
			(function() {
				cells[i].addEventListener("click", function() { 
					insertGameElement(this);
					clearField() }, false);
			}());
		}
	}
	wins = [0, 0];
	gameProcess = 0;
	gameState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	currentPlayer = "cross";
}

function insertGameElement (cell) {
	if (cell.innerHTML === "") {
		gameState[cell.id] = currentPlayer;
		var gameElement = document.createElement("div");
		gameElement.className = currentPlayer + " game-element";
		// alert(gameState[cell.id]);
		switchPlayer();
		cell.appendChild(gameElement);
		gameProcess++;
	}
}

function clearField () {
	if (gameProcess === 9) {
		gameProcess++;
		wins[1]++;
	} else if (gameProcess === 10) {
		for (var i = cells.length - 1; i >= 0; i--) {
			cells[i].removeChild(cells[i].childNodes[0]);
		}
		setupField();
	}
}

function switchPlayer () {
	if (currentPlayer === "cross") {
		currentPlayer = "circle";
	} else {
		currentPlayer = "cross";
	}
}

function checkWin () {
	if (gameProcess > 5) {
		if (gameState[0] === gameState[1] && gameState[1] === gameState[2]) {
			
		}
		if (gameState[3] === gameState[4] && gameState[4] === gameState[5]) {
			
		}
		if (gameState[6] === gameState[7] && gameState[7] === gameState[8]) {
			
		}
		if (gameState[0] === gameState[3] && gameState[3] === gameState[6]) {
			
		}
		if (gameState[1] === gameState[4] && gameState[4] === gameState[7]) {
			
		}
		if (gameState[2] === gameState[5] && gameState[5] === gameState[8]) {
			
		}
		if (gameState[2] === gameState[4] && gameState[4] === gameState[6]) {
			
		}
		if (gameState[0] === gameState[4] && gameState[4] === gameState[8]) {
			
		}
	}
}