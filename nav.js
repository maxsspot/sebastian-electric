document.getElementById ("navigation").style.opacity = "0";

const element = document.getElementById('nav')

element.addEventListener("click", () => {
	document.getElementById ("nav").style.display = "none";
        document.getElementById ("navigation").style.marginLeft = "0px";
	document.getElementById ("navigation").style.opacity = "1";
        document.getElementById ("nav2").style.display = "block";
});

const element2 = document.getElementById('nav2')

element2.addEventListener("click", () => {
	document.getElementById ("nav").style.display = "block";
        document.getElementById ("navigation").style.marginLeft = "-100%";
	document.getElementById ("navigation").style.opacity = "0";
        document.getElementById ("nav2").style.display = "none";
});

const element3 = document.getElementById('nobot')

element3.addEventListener("click", () => {
	document.getElementById ("nobot").style.fontWeight = "bold";
	document.getElementById ("verifiy").innetHTML = "<i class = 'fas fa-check'></i>";
	document.getElementById ("submitform").disabled = false;
});

var newURL = location.href.split("?")[0];
window.history.pushState('object', document.title, newURL);
