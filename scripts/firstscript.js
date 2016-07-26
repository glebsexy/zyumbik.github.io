window.onload = function() {
	var button = document.getElementById("create-article");
	button.onclick = function() {
		document.getElementById("boringarticle").getElementsByTagName("header")[0].getElementsByTagName("h3")[0].innerHTML = "Fun article";
	}
}