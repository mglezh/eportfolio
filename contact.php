<!DOCTYPE html>
<html lang="en">
    <head>
    	<meta charset="utf-8">
        <title>MGLEZH | Ingeniero electrónico</title>
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/styles.css" />
		<link rel="shortcut icon" href="icn/favicon.ico"/> 

        <!-- Para emplear íconos en formato letra "http://fontawesome.io/icons/" -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Para emplear jquery -->
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    	<script type="text/javascript" src="js/codigo.js"></script>
    </head>
    <body>
        <section class="wrapper">
            <header>
                <?php 
                   	require_once("php/head.php");
                 ?> 
            </header>
            <nav>
                <?php 
                    require_once("php/nav.php");
                 ?> 
            </nav>
            <div>
                <section class="contact">
                    <div id="sbg_contents">
                        <div class="contenidosIntroLateral">
                            <form id="form-contact" action="">
                                <div id="camposForm">
                                    <div class="campoForm">Nombre
                                        <br>
                                        <input class="datoForm" name="nombre" id="nombre" >
                                        <input type="hidden" name="label_Nombre" value="Nombre">
                                    </div>
                                    <div class="campoForm">Correo electrónico *
                                        <br>
                                        <input type="email" class="datoForm" name="correo" id="correo" >
                                        <input type="hidden" name="label_Correo" value="Correo electrónico">
                                    </div>
                                    <div class="campoForm">Comentarios *
                                        <br>
                                        <textarea class="datoForm" name="comentarios" id="comentarios"> </textarea>
                                        <input type="hidden" name="label_Comentarios" value="Comentarios"> 
                                    </div>
                                </div>
                                <div id="msgForm"></div>
                                <div class="msg-form msg-token">
                                    <i class="fa fa-exclamation-circle"></i>&nbsp;&nbsp;Hay un problema en la verificación del envío. Inténtelo de nuevo más tarde
                                </div>
                                <div class="msg-form msg-token-old">
                                    <i class="fa fa-exclamation-circle"></i>&nbsp;&nbsp;El tiempo de espera para enviar el mensaje se ha agotado. Es necesario recargar la página y rellenar de nuevo el formulario
                                </div>
                                <div class="msg-form msg-faltan">
                                    <i class="fa fa-exclamation-circle"></i>&nbsp;&nbsp;Es necesario rellenar todos los campos marcados con *
                                </div>
                                <div class="msg-form msg-envio-nok">
                                    <i class="fa fa-exclamation-circle"></i>&nbsp;&nbsp;Se ha producido un problema en el envío del mensaje. Puede intentarlo más tarde
                                </div>
                                <div class="msg-form msg-mail-nok">
                                    <i class="fa fa-exclamation-circle"></i>&nbsp;&nbsp;El email proporcionado no es válido
                                </div>
                                <div class="msg-form msg-envio-ok">
                                    <i class="fa fa-check-btb"></i>&nbsp;&nbsp;El mensaje se envió correctamente. Muchas gracias
                                </div>
                                <div class="msg-form msg-enviando">Un momento por favor...</div>
                                <a class="enviar" id="send_mail"  > Enviar &nbsp;&nbsp;
                                    <i class="fa fa-paper-plane">
                                    </i>
                                </a>
                                 <input type="hidden" name="token" value="de40f02a0dc33374b5c8275d0553ed57">
                        </form>
                        </div>
                    </div>            
    	        </section>
   	        </div>
            <aside id = "sidebar">
                    <p> Si necesita contactar para posibles colaboraciones, ideas, proyectos, sugerencias, puede hacerlo completando el formulario. </p>
                    <p> Los campos con * son obligatorios. </p>
            </aside>
            <footer>
                <?php 
                    require_once("php/pie.php");
                ?> 
            </footer>
        </section>
    </body>
</html>