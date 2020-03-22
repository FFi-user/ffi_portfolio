<!DOCTYPE html>
<html lang ="ja">
<head>
    <title>メール受付完了</title>
    <meta charset = "UTF-8">
    <link rel="stylesheet" href="/common/css/reset.css">
    <link rel="stylesheet" href="/common/css/common.css">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <div class = "form_massage">
<?php foreach ($error as $value){
            print '<p>'. $value . '</p>';
            }
    if($request_method === 'POST') {
        if(count($error) === 0) {
            print 'メールをいただきましてありがとうございます。\n
                    担当者より３日以内にご返答させていただきますので、今しばらくお待ちください。\n
                    なお、１８時以降にいただいたメールについては翌日のメールとさせていただきます。\n
                    何卒よろしくお願いいたします。';
        } 
    } ?>
    <div class = "return_top">
        <p><a href = "./index.html">TOPに戻る</p>
    </div>
</body>
</html>