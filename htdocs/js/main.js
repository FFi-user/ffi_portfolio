var windowWidth = $(window).width();
var spWid = 767;
var active = "is-active";

$(function() {
  var winH = window.innerHeight;

  // ファーストビュー高さMAX
  $(".js_mv_height").css({height:winH});

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