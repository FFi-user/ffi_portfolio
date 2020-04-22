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
<!-- main-->
<main class="main">
        <!-- main_left-->
        <div class="main_left js_fixed_target_content">
            <div class="main_left_inr">
            <div class="main_left_logo forPC"><img src="./img/logo_ffi_bl.png" alt="FFi"></div>
            <div class="main_left_logo forSP"><img src="./img/logo_ffi.png" alt="FFi"></div>
            <nav class="main_left_nav">
                <ul class="main_left_ul">
                    <li class="main_left_li"><a class="main_left_a anchor_ffi" href="#ffi">FFiとは</a></li>
                    <li class="main_left_li"><a class="main_left_a anchor_member" href="#member">メンバー</a></li>
                    <li class="main_left_li"><a class="main_left_a anchor_history" href="#past_works">過去作品</a></li>
                    <li class="main_left_li"><a class="main_left_a anchor_order" href="#about_order">ご依頼について</a></li>
                    <li class="main_left_li"><a class="main_left_a anchor_contact" href="#contact">お問い合わせ</a></li>
                    <li class="main_left_li"><a class="main_left_a anchor_member" href="#member_recruit">制作メンバー<br>求む！</a></li>
                </ul>
            </nav>
            </div>
        </div>
        <!-- end main_left-->
        <!-- main_right-->
        <section class="main_right js_main_content">
            <div class="main_right_inr">
            <!-- section-->
            <section class="section" id="ffi">
                <div class="main_right_heading_wrap">
                    <h2 class="main_right_heading noto_serif">メールを<br>受け付けました</h2>
                </div>
<?php foreach ($error as $value){
            print '<p class="main_right_heading_bottom_p target">'. $value . '</p>';
            }
    if($request_method === 'POST') {
        if(count($error) === 0) {
            print '<p class="main_right_heading_bottom_p target">メールをいただきましてありがとうございます。<br>
                    担当者より３日以内にご返答させていただきますので、今しばらくお待ちください。<br>
                    なお、１８時以降にいただいたメールについては翌日のメールとさせていただきます。<br>
                    何卒よろしくお願いいたします。</p>';
        } 
    } ?>
</body>
</html>