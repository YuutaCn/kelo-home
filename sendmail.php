<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'phpmailer/src/Exception.php';
require_once 'phpmailer/src/PHPMailer.php';
require_once 'phpmailer/src/SMTP.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {

    $send_bitrix24['fields'] = array(
        'NAME' => isset($_POST['name'])?$_POST['name']:'Заявка с сайта kelohome.ru',
        "PHONE" => array(
            array(
                'VALUE' => isset($_POST['phone'])?$_POST['phone']:'',
            )
        ),
        "COMMENTS" => 'Заявка с сайта kelohome.ru'
    );

    $url_param = http_build_query($send_bitrix24);
    $res = json_decode(file_get_contents('https://kelohome.bitrix24.ru/rest/1/hoq8msht2onf3j0k/crm.lead.add.json?'.$url_param), 1);

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";

    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 0;

    $mail->Host = "ssl://smtp.mail.ru";
    $mail->Port = "465";
    $mail->Username = "info@kelohome.ru";
    $mail->Password = 'RfTYL6jujD6YnqN26CWu';

    // От кого письмо
    // $mail->setFrom("info@kelohome.ru", (isset($_POST['phone'])?str_replace(array(' ','(',')','-'),'',$_POST['phone']).'@kelohome.ru':'Kelo Home'));
    $mail->setFrom("info@kelohome.ru", "order@kelohome.ru");
    // Кому письмо
    $mail->addAddress("order@kelohome.ru");
    // Тема письма
    $mail->Subject = "Заявка с сайта";

    // Тело письма

    $body .= "<h1>Заявка на звонок!</h1>";

    if (isset($_POST['name'])) {
        $body .= '<p><strong>Имя:</strong> ' . $_POST["name"] . '</p>';
    }
    if (isset($_POST['name'])) {
        $body .= '<p><strong>Телефон:</strong> ' . $_POST["phone"] . '</p>';
    }

    $mail->msgHTML($body);
    $mail->Body = $body;

    if (!$mail->send()) {
        $message = "Ошибка!";
    } else {
        $message = "Данные отправлены";
    }

    $response = [$message];

    header("Content-type: application/json");
    echo json_encode($response);
}
?>