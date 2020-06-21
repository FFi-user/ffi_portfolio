var windowWidth = $(window).width();
var spWid = 767;
var active = "is-active";
var goSP = spWid >= windowWidth;

$(function() {
  var winH = window.innerHeight;
  var humToggle = $(".sp_hum_toggle");
  var humLine = $(".sp_hum_line");
  var humFixContent = $(".js_fixed_target_content");

  // ファーストビュー高さMAX
  $(".js_mv_height").css({height:winH});

  // ページトップ
  $(".page_top").on("click", function() {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  // スムーススクロール
  // smooth scroll
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - 20;

    $("body,html").animate(
      {
        scrollTop: position
      },
      speed,
      "swing"
    );
    return false;
  });

  $(window).on("scroll", function() {
    var target = $(".target"); //表示非表示の対象
    var isAnimation = "is-animation"; //表示クラスの付与用

    // 画面真ん中でアニメーション発火
    target.each(function() {
      var targetOffset = $(this).offset().top; //対象の高さ
      var scrollPos = $(window).scrollTop(); //ブラウザ全体のスクロール位置
      var wHeight = $(window).height(); //ブラウザ全体の高さを取得

      // 処理のタイミング
      if (scrollPos > targetOffset - wHeight + wHeight / 3) {
        $(this).addClass(isAnimation);
      }
    });

    // scroll時 ハンバーガーメニューの色を反転
    if(goSP) {
      if(humToggle.hasClass(active)) {
        humColorDefault();
      } else {
        if ($(this).scrollTop() + 60 > winH) {
          humColorChange();
        } else {
          humColorDefault();
        }
      }
    }
  });

  // navカレント表示
  var stepMenu = function() {
  var array = {
    "#ffi": 0,
    "#member": 0,
    "#past_works": 0,
    "#about_order": 0,
    "#contact": 0,
    "#member_recruit": 0
  };
  var $globalNavi = new Array();
  for (var key in array) {
    if ($(key).offset()) {
      array[key] = $(key).offset().top - 100;
      $globalNavi[key] = $('.main_left_ul .main_left_li a[href="' + key + '"]');
    }
  }
  $(window).scroll(function () {
    for (var key in array) {
      if ($(window).scrollTop() > array[key] - 100) {
        $(".main_left_a").each(function() {
          $(this).removeClass(active);
        });
      $globalNavi[key].addClass(active);
      }
    }
  });
  }
  stepMenu();

  if(goSP) {
    // ハンバーガーメニューの開閉
    humToggle.on("click", function() {
      // 開閉時 ハンバーガーメニューの色を反転
      if ($(window).scrollTop() + 60 > winH && !$(this).hasClass(active)) {
        humColorDefault();
      } else if ($(window).scrollTop() + 60 > winH && $(this).hasClass(active)) {
        humColorChange();
      }
      $(this).toggleClass(active);
      humFixContent.toggleClass(active);
    });
    $(".main_left_a").on('click', function() {
      // 開閉メニュークリック時は、mv下にしかスクロールされない。
      if ($(window).scrollTop() + 60 > winH) {
        humColorChange();
      }
      humClose();
    });
    // 開いている時に他の要素をクリック（orタッチ）したら閉じる
    $(document).on("click touchend", function(e) {
      if (humToggle.hasClass(active) && !$(e.target).closest(".sp_hum_toggle").length) {
        if ($(window).scrollTop() + 60 > winH) {
          humColorChange();
        } else {
          humColorDefault();
        }
        humClose();
      }
    });
  }

  // 関数 / ハンバーガーメニューの色を変更
  function humColorDefault() {
    humToggle.css({
      "border-color": "#fff"
    });
    humLine.css({
      "background-color": "#fff"
    });
  }
  function humColorChange() {
    humToggle.css({
      "border-color": "#333"
    });
    humLine.css({
      "background-color": "#333"
    });
  }
  function humClose() {
    humToggle.removeClass(active);
    humFixContent.removeClass(active);
  }

  // お問い合わせフォーム未入力防止
  $(".form_submit_btn").on("click", function() {
    var inputCompanyName = $("input[name='company_name']");
    var inputFullName = $("input[name='full_name']");
    var inputEmail = $("input[name='email']");
    var textAreaOtherText = $("textarea[name='other_text']");

    // if(formCheck(inputCompanyName,"貴社名") == false){return false;}
    if(formCheck(inputFullName,"お名前") == false){return false;}
    if(formCheck(inputEmail,"メールアドレス") == false){return false;}
    if(formCheck(textAreaOtherText,"メッセージ") == false){return false;}
  });

  function formCheck(target,comment) {
    if(target.val() == "") {
      alert(comment + "が記入されていません。");
      return false;
    }
  }
});

$(window).on("load", function() {
  setTimeout(function() {
    $(".mv_ani.no1").addClass(active);
    $(".mv_ani.no2").addClass(active);
    $(".mv_ani.no3").addClass(active);
  }, 200);

  // 正方形アニメーションが終了したら開始。
  setTimeout(function() {
    $(".mv_heading_logo").addClass(active);
    $(".mv_heading_generic_name").addClass(active);
  }, 2400);
});