"use strict";

window.onload = function() {
	// var columns = document.getElementsByClassName("column");
	for (var i = 3 - 1; i >= 0; i--) {
		addPhoto(document.getElementsByClassName("photos")[0]);
	}
	document.getElementsByClassName("photos")[0].onclick = function() {
		addPhoto(this);
	};
};

var counter = 0;

function addPhoto (container) {
	// container.innerHTML += "<img src=\"https://new.vk.com/images/emoji/D83DDE01.png\" alt=\"Photo\" class=\"photo\">";
	var img = document.createElement("img");
	img.src = "https://source.unsplash.com/random/" + counter++;
	container.appendChild(img);
}

function changeMenuIcon(z){
	z.classList.toggle("change");
}
