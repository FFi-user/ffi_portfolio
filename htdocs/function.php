<?php   
// リクエストメソッドを取得
    function post_request_method(){
        return $_SERVER['REQUEST_METHOD'];
    }
    
// POSTデータを取得
    function post_data($key) {
        $str ='';
        
        if(isset($_POST[$key]) === TRUE){
            $str = $_POST[$key];
        }
        
        return $str;
    }
    

// DB接続
    function get_db_connect() {
        // コネクション取得
        if (!$link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWD, DB_NAME)) {
            die('error: ' . mysqli_connect_error());
        }
        // 文字コードセット
        mysqli_set_charset($link, DB_CHARACTER_SET);
    
        return $link;
    }
    

//DB切断
    function close_db_connect($link){
        mysqli_close($link);
    }

// HTMLとして表示する文字をHTMLエンティティに変換する
    function entity_str($str){
        return htmlspecialchars($str, ENT_QUOTES, HTML_CHARACTER_SET);
    }
?>