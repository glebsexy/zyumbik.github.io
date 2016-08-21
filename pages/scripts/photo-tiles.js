window.onload = function() {
	addPhoto(document.getElementsByClassName("photos")[0]);
};

var counter = 0, maxElements = 10;
var column;

function addPhoto (container) {
	if (counter < maxElements) {
		var div = document.createElement("div");
		div.className = "image";
		var img = new Image();
		img.src = "https://source.unsplash.com/random/" + (+new Date());
		img.ondragstart = function(event) {
			event.preventDefault();
		};
		img.onload = function() {
			addPhoto(container);
			if (img.naturalHeight < img.naturalWidth && counter < maxElements) {
				counter++;
				div.appendChild(img);
				if (counter % 2 !== 0) {
					column = document.createElement("div");
					column.className = "column";
					column.appendChild(div)
					container.appendChild(column);
				} else {
					column.appendChild(div);
				}
			}
		};
	}
}

function changeMenuIcon (z){
	z.classList.toggle("change");
	document.getElementById("menu").classList.toggle("hidden");
}

var curYPos = 0, curXPos = 0, curDown = false;

window.addEventListener('mousemove', function(e){ 
	if(curDown === true){
		window.scrollBy(curXPos - e.pageX, curYPos - e.pageY);
	}
});

window.addEventListener('mousedown', function(e){ curDown = true; curYPos = e.pageY; curXPos = e.pageX; });
window.addEventListener('mouseup', function(e){ curDown = false; });
