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

const menu = document.querySelector(".menu");
let menuVisible = false;

const toggleMenu = command => {
  menu.style.display = command === "show" ? "block" : "none";
  menuVisible = !menuVisible;
};

const setPosition = ({ top, left }) => {
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  toggleMenu("show");
};

window.addEventListener("click", e => {
  if(menuVisible)toggleMenu("hide");
});

window.addEventListener("contextmenu", e => {
  e.preventDefault();
  const origin = {
    left: e.pageX,
    top: e.pageY
  };
  setPosition(origin);
  return false;
});
