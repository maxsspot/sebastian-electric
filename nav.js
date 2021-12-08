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

var newURL = location.href.split("?")[0];
window.history.pushState('object', document.title, newURL);

if('serviceWorker' in navigator) {
  let registration;

  const registerServiceWorker = async () => {
    registration = await          navigator.serviceWorker.register('./service-worker.js');
  };

  registerServiceWorker();
}
