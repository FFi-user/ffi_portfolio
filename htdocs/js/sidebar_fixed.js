// pc sidebar固定
if (spWid >= windowWidth) {
  // SP処理
} else {
  // PCの処理
  $(window).on('load', function() {
    var targetHei = $(".js-fixed-target-content").height();
    var targetMaxHei = $(window).height();
    var mainContent = $(".js-main-content").offset().top;
    var fixedContent = $(".js-main-content").outerHeight();
    var endline = fixedContent + mainContent - targetHei;

    // overflowの高さを指定
    $(".js-fixed-target-content").css({
      "height": targetHei,
      "max-height": targetMaxHei
    });

    $(window).scroll(function() {
      var scrollY = $(window).scrollTop();

      // + 70:固定ヘッダー分を考慮
      // ターゲットに到達していない時
      if(scrollY <= mainContent){
        $(".js-fixed-target-content").css({
          "position": "relative",
          "top" : "auto",
          "bottom" : "auto",
          "left" : 0
        });
      // ターゲットに到達している時
      } else if (scrollY > mainContent && scrollY < endline) {
        var winWid = $(window).width();
        var $wrap = $(".main");
        var wrapWid = $wrap.width();
        var wrapOffsetLeft = $wrap.offset().left;
        var wrapOffsetRight = winWid - wrapOffsetLeft - wrapWid;
        $(".js-fixed-target-content").css({
          position: "fixed",
          top: 0,
          bottom: "auto",
          left: wrapOffsetRight
        });
      // ターゲットが範囲外になる時
      } else {
        $(".js-fixed-target-content").css({
          "position": "absolute",
          "top" : "auto",
          "bottom" : 0,
          "left" : 0
        });
      }
    });
  });
}