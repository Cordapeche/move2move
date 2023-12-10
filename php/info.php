<?php

$prenom = $_POST['prenom'];
$nom = $_POST['nom'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$mes = $_POST['message'];


$to      = 'contact2move@gmail.com';
$subject = $nom + $prenom;
$message = $mes;
$headers = 'From: '.$mail + $phone . "\r\n" .
    'Reply-To: '.$mail. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);


?>
