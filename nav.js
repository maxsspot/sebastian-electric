document.getElementById ("navigation").style.opacity = "0";

function navback () {
	document.getElementById ("nav").style.display = "block";
        document.getElementById ("navigation").style.marginLeft = "-100%";
	document.getElementById ("navigation").style.opacity = "0";
        document.getElementById ("nav2").style.display = "none";
}	

function nav () {
   	document.getElementById ("nav").style.display = "none";
        document.getElementById ("navigation").style.marginLeft = "0px";
	document.getElementById ("navigation").style.opacity = "1";
        document.getElementById ("nav2").style.display = "block";
}	

document.getElementById ("submitform").disabled = true;

$(document).ready(function(){
    $("#check").click(function(){
        if($(this).is(":checked")){
        	document.getElementById ("submit").disabled = false;
        }else if($(this).is(":not(:checked)")){
        	document.getElementById ("submit").disabled = true;
        }
    });
});
