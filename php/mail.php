<?php
header("Content-Type: text/html;charset=utf-8");
mb_language('ja');
mb_internal_encoding( "utf-8" );

$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_choice = $_POST['choice'];

$field_message = $_POST['message'];

$mail_to = 'arrivederci1115@gmail.com';
$subject = 'ユーザーからのお問合せ';
$body_message .= '名前: '.$field_name."\n";
$body_message .= 'アドレス: '.$field_email."\n";

$body_message .= '本文: '.$field_message;
$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";
$mail_status = mail($mail_to, $subject, $body_message, $headers);
if ($mail_status) { ?>
    <script language="javascript" type="text/javascript">
        window.location = 'send_completely.html';
    </script>
<?php
}
else { ?>
    <script language="javascript" type="text/javascript">
        alert('メッセージ送信に失敗しました。こちらのメールアドレスへお問い合わせください。kama.indiacurry1995@gmail.com');
        window.location = 'index.html';
    </script>
<?php
}
?>
    
