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
					clearField(); }, false);
			}());
		}
	}
	gameProcess = 0;
	gameState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	currentPlayer = "cross";
}

function insertGameElement (cell) {
	if (gameProcess === 9) {
		gameProcess = 10;
	} else if (cell.innerHTML === "") {
		gameState[cell.id - 1] = currentPlayer;
		var gameElement = document.createElement("div");
		gameElement.className = currentPlayer + " game-element";
		switchPlayer();
		cell.appendChild(gameElement);
		gameProcess++;
		checkWin();
	}
}

function clearField () {
	if (gameProcess === 10) {
		for (var i = cells.length - 1; i >= 0; i--) {
			if (gameState[i] !== 0){
				cells[i].removeChild(cells[i].childNodes[0]);
			}
		}
		document.getElementById("table").className = "";
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
	if (gameProcess > 9) {
		clearField();
	} else if (gameProcess > 4) {
		if (gameState[0] === gameState[1] && gameState[1] === gameState[2]) {
			if (determineWinner(gameState[0])) {
				document.getElementById("table").className += "horizontal top";
			}
		}
		if (gameState[3] === gameState[4] && gameState[4] === gameState[5]) {
			if (determineWinner(gameState[3])) {
				document.getElementById("table").className += "horizontal center";
			}
		}
		if (gameState[6] === gameState[7] && gameState[7] === gameState[8]) {
			if (determineWinner(gameState[6])) {
				document.getElementById("table").className += "horizontal bottom";
			}
		}
		if (gameState[0] === gameState[3] && gameState[3] === gameState[6]) {
			if (determineWinner(gameState[0])) {
				document.getElementById("table").className += "vertical left";
			}
		}
		if (gameState[1] === gameState[4] && gameState[4] === gameState[7]) {
			if (determineWinner(gameState[1])) {
				document.getElementById("table").className += "vertical center";
			}
		}
		if (gameState[2] === gameState[5] && gameState[5] === gameState[8]) {
			if (determineWinner(gameState[2])) {
				document.getElementById("table").className += "vertical right";
			}
		}
		if (gameState[2] === gameState[4] && gameState[4] === gameState[6]) {
			if (determineWinner(gameState[2])) {
				document.getElementById("table").className += "rldiagonal";
			}
		}
		if (gameState[0] === gameState[4] && gameState[4] === gameState[8]) {
			if (determineWinner(gameState[0])) {
				document.getElementById("table").className += "lrdiagonal";
			}			
		}
	}
}

function determineWinner (winner) {
	if (winner === "cross") {
		wins[0]++;
	} else if (winner === "circle") {
		wins[1]++;
	} else {
		return false;
	}
	gameProcess = 9;
	alert("X: " + wins[0] + "\nO: " + wins[1]);
	return true;
}
