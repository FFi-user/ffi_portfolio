// pc sidebar固定
if (!goSP) {
  // PCの処理
  $(window).on('load scroll', function() {
    var fix = $(".js_fixed_target_content");
    var main = $(".js_main_content");
    var targetHei = fix.height();
    var mainContent = main.offset().top;
    var fixedContent = main.outerHeight();
    var endline = fixedContent + mainContent - targetHei;

    var scrollY = $(window).scrollTop();

    // ターゲットに到達していない時
    if(scrollY <= mainContent){
      fix.css({
        "position": "relative",
        "top" : "auto",
        "bottom" : "auto",
        "left" : 0
      });
      main.css({
        "margin-left": 0
      });
    // ターゲットに到達している時
    } else if (scrollY > mainContent && scrollY < endline) {
      var $wrap = $(".main");
      var wrapOffsetLeft = $wrap.offset().left;
      var widFixContent = fix.width();
      fix.css({
        "position": "fixed",
        "top": 0,
        "bottom": "auto",
        "left": wrapOffsetLeft
      });
      main.css({
        "margin-left": widFixContent + 50
      });
    // ターゲットが範囲外になる時
    } else {
      fix.css({
        "position": "absolute",
        "top" : "auto",
        "bottom" : 0,
        "left" : 0
      });
      main.css({
        "margin-left": widFixContent + 50
      });
    }
  });
}