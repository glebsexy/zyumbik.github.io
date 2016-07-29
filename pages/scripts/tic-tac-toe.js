window.onload = function() {
	// var cells = document.getElementsByClassName("cell");
	var cells = document.getElementsByClassName("cell");
	for (var i = 0; i < cells.length; i++) {
		cells[i].onclick = function() {
			alert(this.id);
		};
	};
}
