// JavaScript Document
function selectArticle() {
	try {
		ElementAside= document.getElementsByClassName("aside");
		ElementImage= document.getElementById("Show_Article");
		if (window.scrollY > ElementAside[0].offsetTop) ElementAside[0].style.marginTop += (window.scrollY - ElementAside[0].offsetTop).toString() + "px";
		else ElementAside[0].style.marginTop = window.scrollY.toString() + "px";
		if (this.title == "") {
			ElementImage.src= "images/image_not_found.png";
		} else {
			ElementImage.src= this.title;
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

function Resize() {
	var WindowsSize = tamanoVentanaNavegador();
	var SectionHeight = (WindowsSize[1] - 
				document.getElementsByTagName("header")[0].offsetHeight - // offsetHeight : include padding, border and margin
				document.getElementsByTagName("footer")[0].offsetHeight);
	if (document.getElementsByClassName("container").length)
		document.getElementsByClassName("container")[0].style.minHeight = SectionHeight.toString() + "px";
}

window.onload = function() {
	Resize();
	var cursos 		= document.getElementsByClassName('curso-title');
	var events 		= document.getElementsByClassName('event-title');
	var articles 	= document.getElementsByClassName('article-title');
	for(i in cursos) 	{cursos[i].onmouseover 		= selectArticle;}
	for(i in events) 	{events[i].onmouseover 		= selectArticle;}
	for(i in articles) 	{articles[i].onmouseover 	= selectArticle;}
	window.onresize = Resize;
}