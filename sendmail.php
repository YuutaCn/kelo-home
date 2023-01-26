<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

// От кого письмо
$mail->setFrom('mail@gmail.com', 'От кого');
// Кому письмо
$mail->addAddress('mail@gmail.com');
// Тема письма
$mail->Subject = 'Тема письма';

// Тело письма
$body .= '<h1>Заявка на звонок!</h1>';

// if(trim(!empty($_POST['name']))) {
  $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
// }
// if(trim(!empty($_POST['name']))) {
  $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
// }
// if(trim(!empty($_POST['name']))) {
  $body.='<p><strong>WhatsApp:</strong> '.$_POST['whatsapp'].'</p>';
// }
// if(trim(!empty($_POST['name']))) {
  $body.='<p><strong>Telegram:</strong> '.$_POST['telegram'].'</p>';
// }

$mail->Body = $body;

if (!$mail->send()){
  $message = 'Ошибка!';
} else {
  $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>