 	    console.log ("Images on this website should not be copied.");
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

	    function loadedpage() {
		document.getElementById ("loader").style.visibility = "hidden";
	    }	


	    function saveInfo () {
		var name = document.getElementById ("usersname").value;
		var email = document.getElementById ("email").value;
		    
		var namevalue = document.cookie = 'name=' + name + '; secure';
		var emailvalue = document.cookie = 'email=' + email + '; secure';
		    
		name.value = document.cookie;
		email.value = document.cookie;
	    }
