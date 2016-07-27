window.onload = function() {
	var button = document.getElementById("create-article");
	button.onclick = function() {
		document.getElementById("boringarticle").getElementsByTagName("header")[0].getElementsByTagName("h3")[0].innerHTML = "Fun article";
	}

	var bordersVisible = 0;

	document.getElementsByTagName("header")[0].getElementsByTagName("h1")[0].getElementsByTagName("a")[0].onclick = function() {
		var div = document.getElementsByTagName("div");
		var header = document.getElementsByTagName("header");
		var a = document.getElementsByTagName("a");
		var article = document.getElementsByTagName("article");
		for (var i = 0; i < div.length; i++) {
			if (bordersVisible === 1) {
				div[i].style.borderStyle = "hidden";
			} else {
				div[i].style.border = "1px solid red";
			}
		}
		for (var i = header.length - 1; i >= 0; i--) {
			if (bordersVisible === 1) {
				header[i].style.borderStyle = "hidden";
			} else {
				header[i].style.border = "1px solid blue";
			}
		}
		for (var i = a.length - 1; i >= 0; i--) {
			if (bordersVisible === 1) {
				a[i].style.borderStyle = "hidden";
			} else {
				a[i].style.border = "1px solid black";
			}
		}
		for (var i = article.length - 1; i >= 0; i--) {
			if (bordersVisible === 1) {
				article[i].style.borderStyle = "hidden";
			} else {
				article[i].style.border = "1px solid green";
			}
		}
		if (bordersVisible === 0) {
			bordersVisible = 1;
		} else {
			bordersVisible = 0;
		}
	}
}