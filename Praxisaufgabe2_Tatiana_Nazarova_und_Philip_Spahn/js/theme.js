var darkTheme = true; 

function changeTheme() {
	if (darkTheme){
		document.getElementById("themeBut").textContent = "Dark Theme";
		document.getElementById("theme").href = "light.css";
		darkTheme = false;
	}else{
		document.getElementById("themeBut").textContent = "Light Theme";
		document.getElementById("theme").href = "dark.css";
		darkTheme = true;
	}
}

function updateTheme() {
	if (darkTheme){
		document.getElementById("theme").href = "dark.css";
	}else{
		document.getElementById("theme").href = "light.css";
	}
}