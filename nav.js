document.getElementById("nav").onclick = function() {nav()};
document.getElementById("nav2").onclick = function() {navback()};

function nav () {
   document.getElementById ("nav").style.display = "none";
                document.getElementById ("navigation").style.marginLeft = "0px";
                document.getElementById ("nav2").style.display = "block";
            }						   
			
function navback () {
	                              document.getElementById ("nav").style.display = "block";
                document.getElementById ("navigation").style.marginLeft = "-100%";
                document.getElementById ("nav2").style.display = "none";
            }						   
