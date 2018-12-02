var navState = false;
function toggleNav(){
	if( navState == false){
		document.getElementsByTagName("main")[0].style.width = "70%";
		var hamburger = document.getElementById("sidebar-button");
		hamburger.setAttribute("class", "sidebar-button-rotate");
	}
	else{
		document.getElementsByTagName("main")[0].style.width = "100%";
		var hamburger = document.getElementById("sidebar-button");
		hamburger.removeAttribute("class", "sidebar-button-rotate");
	}
	navState = !navState;			
}
