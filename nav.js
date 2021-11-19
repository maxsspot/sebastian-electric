 	    console.log ("Images on this website should not be copied.");
            document.getElementById('nav').onclick = function nav () {

            }

document.getElementById('nav').addEventListener("click", function() {
   document.getElementById ("nav").style.display = "none";
                document.getElementById ("navigation").style.marginLeft = "0px";
                document.getElementById ("nav2").style.display = "block";
}
						   
						   
document.getElementById('nav2').addEventListener("click", function() {
                                      document.getElementById ("nav").style.display = "block";
                document.getElementById ("navigation").style.marginLeft = "-100%";
                document.getElementById ("nav2").style.display = "none";
}
