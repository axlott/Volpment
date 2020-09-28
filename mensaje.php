<?php

 // Datos del contacto
  $destino = "agusto.rs@volpment.com";
  $asunto = "contacto de nuestra web"
  //Datos para enviar
  $nombre = $_POST["nombre"];
  $apellido = $_POST["apellido"];
  $numero = $_POST["numero"];
  $email = $_POST["email"];
  $motivo = $_POST["motivo"];
  $mensaje = $_POST["mensaje"];

  $correo = "de: $nombre \n";
  $correo .=  "$apellido \n";
  $correo .= "con el correo: $email \n";
  $correo .= "y el numero: $numero \n";
  $correo .= "por el motivo: $motivo \n";
  $correo .= "Con el mensaje de: $mensaje \n";

  //enviando mensaje 

  mail($destino, $asunto, $carta);
  header("Location:gracias.html");


?>