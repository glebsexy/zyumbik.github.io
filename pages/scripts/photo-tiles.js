window.onload = function() {
	// var columns = document.getElementsByClassName("column");
	addPhoto(document.getElementsByClassName("photos")[0]);
	document.getElementsByClassName("photos")[0].onclick = function() {
		addPhoto(this);
	};
};

var counter = 0;

function addPhoto (container) {
	if (counter < 6) {
		var div = document.createElement("div");
		div.className = "image";
		var img = new Image();
		img.src = "https://source.unsplash.com/random/" + counter++;
		img.onload = function() {
			addPhoto(container);
			if (img.naturalHeight < img.naturalWidth) {
				div.appendChild(img);
				container.appendChild(div);
			}
		};
	}
}

function changeMenuIcon (z){
	z.classList.toggle("change");
	document.getElementById("menu").classList.toggle("hidden");
}
