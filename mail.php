<?php
	 
	$emailTo  = 'mglezh@gmail.com';
	 
	$name = $_POST['nombre'];
	$emailBy = $_POST['correo'];
	$comment = $_POST['comentarios'];
	 
	$thank = "/index.html";
	 
	$message = "Nombre: ".$name."
				Correo: ".$emailBy."
				Comentario: ".$comment."";

	$response_array['result'] = 'noOk'; 
	if ((strlen($emailBy) == 0) || (strlen($comment) == 0)) {
		$response_array['msg'] = 'faltan';
	}
	else {
		if(!filter_var($emailBy, FILTER_VALIDATE_EMAIL)) {
			$response_array['msg'] = 'mail-nok';
		}
		else {
			if (mail($emailTo, "WEB: Message", $message, "FROM: ".$emailBy)) {
			}
			$response_array['result'] = 'ok'; 
		}
	}
	$response_array['textStatus'] = 'ok'; 
	echo json_encode($response_array);
?>