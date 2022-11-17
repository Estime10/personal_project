<?php
$name = $_Post['name'];
$visito_email = $_Post['email'];
$message = $_Post['message'];


$email_form = 'Estimevangu.pro@gmail.com';

$emaiil_subject = "New form subission";

$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                    "User Message: $message.\n";


$to = "Estimevangu.pro@gmail.com";
$headers = "From: $email_from \r\n";
$headers = "Reply-to: $visitor_ \r\n";
mail($to,$emaiil_subject,$email_body,$headers);

header("Location:index.html");

?>