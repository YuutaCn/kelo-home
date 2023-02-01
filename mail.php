<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'phpmailer/src/Exception.php';
require_once 'phpmailer/src/PHPMailer.php';
require_once 'phpmailer/src/SMTP.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {

    $mail = new PHPMailer(true);

    try {

        $body = "<h1>Заявка на звонок!</h1>";

        $comments = "";

        $names = array(
            'name' => 'Имя',
            'phone' => 'Телефон',
            'vopros-1' => 'Какой тип дома необходим',
            'vopros-2' => 'Какую кровлю будут использовать',
            'vopros-3' => 'Строительство планируют начать',
            'vopros-4' => 'Допкомплектация дома',
            'vopros-5' => 'В каком регионе хотят построить дом',
        );

        foreach ($_POST as $key => $value) {
            if ($value != "") {
                if (!is_array($value)) {
                    if ($key != 'name' && $key != 'phone') {
                        $comments .= $names[$key] . ': ' . $value . "<br>";
                    }
                    $body .= '<p><strong>' . $names[$key] . ':</strong> ' . $value . '</p>';
                } else {
                    foreach ($value as $item) {                        
                        $comments .= $names[$key] . ': ' . $item . "<br>";
                        $body .= '<p><strong>' . $names[$key] . ':</strong> ' . $item . '</p>';
                    }
                }
            }
        }

        $send_bitrix24['fields'] = array(
            'NAME' => isset($_POST['name']) ? $_POST['name'] : 'Заявка с сайта kelohome.ru',
            "PHONE" => array(
                array(
                    'VALUE' => isset($_POST['phone']) ? $_POST['phone'] : '',
                )
            ),
            "COMMENTS" => $comments ? $comments : 'Заявка с сайта kelohome.ru'
        );

        $url_param = http_build_query($send_bitrix24);
        json_decode(file_get_contents('https://kelohome.bitrix24.ru/rest/1/hoq8msht2onf3j0k/crm.lead.add.json?' . $url_param), 1);

        $mail->CharSet = "UTF-8";
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = "ssl://smtp.mail.ru";
        $mail->SMTPAuth = true;
        $mail->Username = "info@kelohome.ru";
        $mail->Password = 'RfTYL6jujD6YnqN26CWu';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = "465";

        $mail->setFrom("info@kelohome.ru", "info@kelohome.ru");
        $mail->addAddress("info@kelohome.ru");

        $mail->isHTML(true);
        $mail->Subject = "Заявка с сайта";
        $mail->Body = $body;

        if (!$mail->send()) {
            echo json_encode(array('error' => true));
        } else {
            echo json_encode(array('success' => true));
        }
    } catch (Exception $e) {
        echo json_encode(array('error' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"));
    }

    exit();
}