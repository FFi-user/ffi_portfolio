var windowWidth = $(window).width();
var spWid = 767;
var active = "is-active";
var goSP = spWid >= windowWidth;

$(function() {
  var winH = window.innerHeight;

  // ファーストビュー高さMAX
  $(".js_mv_height").css({height:winH});

  // スムーススクロール
  // smooth scroll
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var hMHeight = $(".header").outerHeight(); //固定ヘッダーの高さ
    var position = target.offset().top - hMHeight; //ターゲットの座標 - ヘッダの高さ

    $("body,html").animate(
      {
        scrollTop: position
      },
      speed,
      "swing"
    );
    return false;
  });

  // 画面真ん中でアニメーション発火
  $(window).on("scroll", function() {
    var target = $(".target"); //表示非表示の対象
    var isAnimation = "is-animation"; //表示クラスの付与用

    target.each(function() {
      var targetOffset = $(this).offset().top; //対象の高さ
      var scrollPos = $(window).scrollTop(); //ブラウザ全体のスクロール位置
      var wHeight = $(window).height(); //ブラウザ全体の高さを取得

      // 処理のタイミング
      if (scrollPos > targetOffset - wHeight + wHeight / 2) {
        $(this).addClass(isAnimation);
      }
    });
  });

  // navカレント表示
  var stepMenu = function() {
  var array = {
    "#ffi": 0,
    "#member": 0,
    "#past_works": 0,
    "#about_order": 0,
    "#contact": 0
  };
  var $globalNavi = new Array();
  for (var key in array) {
    if ($(key).offset()) {
      array[key] = $(key).offset().top - 10;
      $globalNavi[key] = $('.main_left_ul .main_left_li a[href="' + key + '"]');
    }
  }
  $(window).scroll(function () {
    for (var key in array) {
      if ($(window).scrollTop() > array[key] - 10) {
        $(".main_left_a").each(function() {
          $(this).removeClass(active);
        });
      $globalNavi[key].addClass(active);
      }
    }
  });
  }
  stepMenu();
});

$(window).on("load", function() {
  $(".mv_ani.no1").addClass(active);
  $(".mv_ani.no2").addClass(active);
  $(".mv_ani.no3").addClass(active);

  // 正方形アニメーションが終了したら開始。
  setTimeout(function() {
    $(".mv_heading_logo").addClass(active);
    $(".mv_heading_generic_name").addClass(active);
  }, 2200);
});