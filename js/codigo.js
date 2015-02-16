// JavaScript Document
var Art_url= "";

function SelectArticle(Art_Img) {
	try {
		Art_url= Art_Img;
		ElementAside= document.getElementsByTagName("aside");
		ElementImage= document.getElementById("Show_Article");
		if (window.scrollY >= ElementImage.offsetTop) ElementAside[0].style.marginTop = (window.scrollY - ElementAside[0].parentElement.offsetTop).toString() + "px";
		else ElementAside[0].style.marginTop = "0";
		if (Art_Img == "") {
			ElementImage.src= "images/image_not_found.png";
		} else {
			ElementImage.src= Art_Img;
		}
	}
	catch(ex){
   	 // Captura de excepciones generadas try
	    console.log("Error detectado: " + ex.description);
	}
	finally {
   	 // Código que siempre se ejecuta
	}
}

function tamanoVentanaNavegador(){
	var dimensiones = [];
	
	if(typeof(window.innerWidth) == 'number') {
		// No es IE
		dimensiones = [window.innerWidth, window.innerHeight];
	} else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
		//IE 6 en modo estandar (no quirks)
		dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
	} else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
		//IE en modo quirks
		dimensiones = [document.body.clientWidth, document.body.clientHeight];
	}
	
	return dimensiones;
}

function SetImg() {
	var WindowsSize = tamanoVentanaNavegador();
	var BigImage = document.getElementById("Big_img");
	
	if (this.id != "Big_img") { 
		BigImage.src = this.src.substring(0,this.src.length-8/*Elimina "_low.jpg"*/)+"_middle.jpg";
		if (this.offsetLeft + this.clientWidth + 2 + (WindowsSize[1] * 0.7) < WindowsSize[0]) {
			BigImage.style.left  = (this.offsetLeft + this.clientWidth + 2).toString() + "px";	
			BigImage.style.right = "";
		}
		else {
			BigImage.style.left  = "";	
			BigImage.style.right = (WindowsSize[0] - this.offsetLeft + 2).toString() + "px";
		}
		window.setTimeout(ShowImg, 10);
	}
}

function ShowImg() {document.getElementById("Big_img").style.visibility="visible";}
function HideImg() {document.getElementById("Big_img").style.visibility="hidden";}

function Resize() {
	var WindowsSize = tamanoVentanaNavegador();
	var SectionHeight = (WindowsSize[1] - 
				document.getElementsByTagName("header")[0].offsetHeight - // offsetHeight : include padding, border and margin
				document.getElementsByTagName("nav")[0].offsetHeight -
				document.getElementsByTagName("footer")[0].offsetHeight);

	if (document.getElementsByClassName("Titles").length) {
		document.getElementsByClassName("Titles")[0].style.minHeight = SectionHeight.toString() + "px";
		var Titles = document.getElementsByClassName("Title");
		for (var i in Titles) {
			if (!isNaN(i)) {
				Titles[i].style.marginTop  = ((SectionHeight - Titles[i].clientHeight) * 0.45).toFixed().toString() + "px";
				Titles[i].style.marginLeft = ((WindowsSize[0] - (Titles[i].clientWidth * 3)) * 0.25).toFixed().toString() + "px";
				Titles[i].style.visibility = "visible";
			}
		}
	}
	if (document.getElementsByClassName("ePortfolio").length)
		document.getElementsByClassName("ePortfolio")[0].style.minHeight = SectionHeight.toString() + "px";
	if (document.getElementsByClassName("fcomplementaria").length)			
		document.getElementsByClassName("fcomplementaria")[0].style.minHeight = SectionHeight.toString() + "px";
	if (document.getElementsByClassName("Articles").length)			
		document.getElementsByClassName("Articles")[0].style.minHeight = SectionHeight.toString() + "px";
	if (document.getElementsByClassName("aside").length)			
		document.getElementsByClassName("aside")[0].style.minHeight = SectionHeight.toString() + "px";
}

window.onload = function() {
	Resize();
	var imagenes = document.getElementsByTagName("img")
	for (i in imagenes){
		imagenes[i].onmouseover = SetImg;
		imagenes[i].onmouseout  = HideImg;
	}
	window.onresize = Resize;
}