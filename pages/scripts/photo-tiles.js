"use strict";

window.onload = function() {
	// var columns = document.getElementsByClassName("column");
	addPhoto(document.getElementsByClassName("photos")[0]);
	document.getElementsByClassName("photos")[0].onclick = function() {
		addPhoto(this);
	};
};

var counter = 0;

function addPhoto (container) {
	if (counter < 51) {
		var img = document.createElement("img");
		img.src = "https://source.unsplash.com/random/" + counter++;
		img.onload = function() {
			addPhoto(container);
			container.appendChild(img);
		};
	}
}

function changeMenuIcon(z){
	z.classList.toggle("change");
}
