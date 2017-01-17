// JavaScript Document
var Art_url= "";

function SelectArticle(Art_Img) {
	try {
		Art_url= Art_Img;
		ElementImage= document.getElementById("Show_Article");
		ElementAside= document.getElementsByTagName("aside");
		if (window.scrollY >= ElementAside[0].offsetTop) {
			ElementImage.style.marginTop = (window.scrollY - ElementAside[0].offsetTop+10).toString() + "px";
		} 	else ElementImage.style.marginTop = "10px";
		if (Art_Img == "only move") { // No hace nada, solo desplaza la imagen al centro de la pantalla
		} else {
			if (Art_Img == "") {
				ElementImage.src= "images/image_not_found.png";
			} else {
				ElementImage.src= Art_Img;
			}
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
function MovSlider() {
	var Slider = document.getElementById("worksslider");
	ElementAside= document.getElementsByTagName("aside");
	if (window.scrollY >= ElementAside[0].offsetTop) {
		Slider.style.marginTop = (window.scrollY - ElementAside[0].offsetTop + 10).toString() + "px";
	} 	else Slider.style.marginTop = "10px";
}
function startSliderAuto(Index) {
	work_slider.startAuto();
}
function SelectSlider(Index) {
	work_slider.stopAuto();
	work_slider.goToSlide(Index, "next");
	//Activa un timer que pasado un tiempo activa el Slider Automático
	setTimeout(startSliderAuto, 4000);
}
function MovImg() {
	var BigImage = document.getElementById("Big_img");
	ElementAside= document.getElementsByTagName("aside");
	if (window.scrollY >= ElementAside[0].offsetTop) {
		BigImage.style.marginTop = (window.scrollY - ElementAside[0].offsetTop + 10).toString() + "px";
	} 	else BigImage.style.marginTop = "10px";
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
		BigImage.style.left = ((WindowsSize[0] / 2) - (BigImage.clientWidth / 2) - 30).toString() + "px";	
		BigImage.style.top = (this.parentElement.parentElement.offsetTop).toString() + "px";
		window.setTimeout(ShowImg, 10);
	}
	MovImg();	
}

function ShowImg() {document.getElementById("Big_img").style.visibility="visible";}
function HideImg() {document.getElementById("Big_img").style.visibility="hidden";}

function Resize() {
	var WindowsSize = tamanoVentanaNavegador();
	var SectionHeight = (WindowsSize[1] - 
				document.getElementsByTagName("header")[0].offsetHeight - // offsetHeight : include padding, border and margin
				document.getElementsByTagName("nav")[0].offsetHeight -
				document.getElementsByTagName("footer")[0].offsetHeight) - 24;
	var title;
	if (document.getElementsByClassName("ePortfolio").length) {
		document.getElementsByClassName("ePortfolio")[0].style.minHeight = SectionHeight.toString() + "px";
		document.getElementById("Big_img").style.height = (SectionHeight - 10).toString() + "px";	
		title = "MGLEZH";
	}
	if (document.getElementsByClassName("fcomplementaria").length) {
		document.getElementsByClassName("fcomplementaria")[0].style.minHeight = SectionHeight.toString() + "px";
		title = "Formación";

	}			
	if (document.getElementsByClassName("works").length) {
		document.getElementsByClassName("works")[0].style.minHeight = SectionHeight.toString() + "px";
		title = "Trabajos";
	}
	if (document.getElementsByClassName("events").length) {
		document.getElementsByClassName("events")[0].style.minHeight = SectionHeight.toString() + "px";
		title = "Eventos";
	}
	if (document.getElementsByClassName("articles").length) {
		document.getElementsByClassName("articles")[0].style.minHeight = SectionHeight.toString() + "px";
		title = "Artículos";
	}		
	if (document.getElementsByClassName("contact").length) {
		document.getElementsByClassName("contact")[0].style.minHeight = SectionHeight.toString() + "px";
		title = "Contacto";
	}		
	if (document.getElementsByTagName("aside").length) {
		document.getElementsByTagName("aside")[0].style.maxHeight = SectionHeight.toString() + "px";
		if (document.getElementById("Show_Article")) 
			document.getElementById("Show_Article").style.maxHeight = SectionHeight.toString() + "px";
	}			
	if (document.getElementsByTagName("header").length) {
		document.getElementById("header_title").innerHTML = title;
	}
}

window.onscroll = function() {
	if (document.getElementsByClassName("ePortfolio").length){
		MovImg();
	}
	if (document.getElementsByClassName("works").length){
		MovSlider();		
	}
	if (document.getElementsByClassName("fcomplementaria").length ||
		document.getElementsByClassName("events").length ||
		document.getElementsByClassName("articles").length)	{		
		SelectArticle("only move");
	}			
}
function vaciarFormSBG() {
	$("#camposForm input:visible, #camposForm textarea:visible").val('');
	$("#camposForm input:checkbox").attr('checked','');
}
function sendMail() {
	var formBase = "form-"
	var formID = this.parentElement.id;
	var formName = formID.substring(formBase.length, formID.length);
	var uriDomain = "http://www.mglezh.com/";
    $('.msg-form').hide()
    $('#'+formID+' .msg-enviando').slideDown(200);
    var datos=$('#'+formID).serialize();
    $.ajax({   
        url:uriDomain+'mail.php?ajaxform&c='+formName,
        dataType:'json',
        type:'POST',
        data:datos,
        success:function(data, textStatus) {
           console.log(data); // show response from the php script. (use the developer toolbar console, firefox firebug or chrome inspector console)
           $('.msg-form').hide()
            if(data.result=='ok'){
                vaciarFormSBG();
                $('#'+formID+' .msg-envio-ok').slideDown(200);
            } else{
                $('#'+formID+' .msg-'+data.msg).slideDown(200);
            }
        }, 
        error:function(xhr,textStatus,errorThrown) {
        }
    });
}

window.onload = function() {
	Resize();
	var imagenes = document.getElementsByTagName("img")
	for (i in imagenes){
		if (imagenes[i].className == "Title") {
			imagenes[i].onmouseover = SetImg;
			imagenes[i].onmouseout  = HideImg;
		}
	}
	if (document.getElementById("send_mail")!= null) {
		document.getElementById("send_mail").onclick = sendMail;
	}
	document.getElementsByClassName("wrapper")[0].style.visibility = "visible";
	window.onresize = Resize;
}