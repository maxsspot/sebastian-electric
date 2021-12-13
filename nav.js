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

var _0x5093=["\x6E\x6F\x62\x6F\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x64\x69\x73\x61\x62\x6C\x65\x64","\x73\x75\x62\x6D\x69\x74\x66\x6F\x72\x6D","\x63\x6C\x69\x63\x6B","\x6F\x70\x61\x63\x69\x74\x79","\x73\x74\x79\x6C\x65","\x30\x2E\x30","\x63\x75\x72\x73\x6F\x72","\x64\x65\x66\x61\x75\x6C\x74","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72"];const element3=document[_0x5093[1]](_0x5093[0]);document[_0x5093[1]](_0x5093[3])[_0x5093[2]]= true;element3[_0x5093[10]](_0x5093[4],()=>{document[_0x5093[1]](_0x5093[0])[_0x5093[6]][_0x5093[5]]= _0x5093[7];document[_0x5093[1]](_0x5093[0])[_0x5093[6]][_0x5093[8]]= _0x5093[9];document[_0x5093[1]](_0x5093[3])[_0x5093[2]]= false})

var newURL = location.href.split("?")[0];
window.history.pushState('object', document.title, newURL);
