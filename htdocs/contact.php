<?php
// 関数ファイル読み込み
require_once (dirname(__FILE__) .'/function.php');
$contact_detail = '';
$company_name = '';
$full_name = '';
$email = '';
$other_text = '';
$error = array();

$request_method = post_request_method();

    if($request_method === 'POST') {
        $contact_detail = post_data('contact_detail');
        $company_name = post_data('company_name');
        $full_name = post_data('full_name');
        $email = post_data('email');
        $other_text = post_data('other_text');
        $to = 'chihiro.n.9240@gmail.com';

        mb_language("Japanese");
        mb_internal_encoding("UTF-8");

        $massage = '会社名：' . $company_name . '\n名前：' . $full_name . '\nメールアドレス：' . $email . '\nメッセージ：' . $other_text; 

        if(!mb_send_mail($to, $contact_detail, $massage)) {
            $error[] = 'メールを送信できませんでした。\nお手数ですが、TOPに戻り再度送信いただきますようお願いいたします。';
        };

    }
    
// view読み込み
include_once (dirname(__FILE__) .'/view_contact.php');
?>
