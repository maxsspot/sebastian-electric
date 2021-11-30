function navback () {
	document.getElementById ("nav").style.display = "block";
        document.getElementById ("navigation").style.marginLeft = "-100%";
        document.getElementById ("nav2").style.display = "none";
}	

function nav () {
   	document.getElementById ("nav").style.display = "none";
        document.getElementById ("navigation").style.marginLeft = "0px";
        document.getElementById ("nav2").style.display = "block";
}	

window.onload = function () {
    var btn = document.getElementById("nav");
	btn.onclick = function () {
        document.getElementById ("nav").style.display = "none";
        document.getElementById ("navigation").style.marginLeft = "0px";
        document.getElementById ("nav2").style.display = "block";
        btn.removeEventListener("click", myFunction);
	}
};
