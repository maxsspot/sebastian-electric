document.getElementById ("navigation").style.opacity = "0";

const element = document.getElementById('nav');

element.addEventListener("click", () => {
	document.getElementById ("nav").style.display = "none";
        document.getElementById ("navigation").style.marginLeft = "0px";
	document.getElementById ("navigation").style.opacity = "1";
        document.getElementById ("nav2").style.display = "block";
});

const element2 = document.getElementById('nav2');

element2.addEventListener("click", () => {
	document.getElementById ("nav").style.display = "block";
        document.getElementById ("navigation").style.marginLeft = "-100%";
	document.getElementById ("navigation").style.opacity = "0";
        document.getElementById ("nav2").style.display = "none";
});

const element3 = document.getElementById('nobot');
document.getElementById ("submitform").disabled = true;
element3.addEventListener("click", () => {
	document.getElementById ("nobot").style.display = "none";
	document.getElementById ("submitform").disabled = false;
});

var _0xbc8f=["\x6E\x6F\x62\x6F\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x64\x69\x73\x61\x62\x6C\x65\x64","\x73\x75\x62\x6D\x69\x74\x66\x6F\x72\x6D","\x63\x6C\x69\x63\x6B","\x66\x6F\x6E\x74\x57\x65\x69\x67\x68\x74","\x73\x74\x79\x6C\x65","\x62\x6F\x6C\x64","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];const element3=document[_0xbc8f[1]](_0xbc8f[0]);document[_0xbc8f[1]](_0xbc8f[3])[_0xbc8f[2]]= true;element3[_0xbc8f[8]](_0xbc8f[4],()=>{document[_0xbc8f[1]](_0xbc8f[0])[_0xbc8f[6]][_0xbc8f[5]]= _0xbc8f[7];document[_0xbc8f[1]](_0xbc8f[3])[_0xbc8f[2]]= false})

var newURL = location.href.split("?")[0];
window.history.pushState('object', document.title, newURL);
