document.getElementById ("navout").onclick = function() {nav()};
document.getElementById ("nav2").onclick = function() {navabck()};

function navback () {
	document.getElementById ("navout").style.display = "block";
        document.getElementById ("navigation").style.marginLeft = "-100%";
        document.getElementById ("nav2").style.display = "none";
}	

function nav () {
   	document.getElementById ("navout").style.display = "none";
        document.getElementById ("navigation").style.marginLeft = "0px";
        document.getElementById ("nav2").style.display = "block";
}	
