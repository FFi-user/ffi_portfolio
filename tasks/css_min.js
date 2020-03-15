/**
 * css_min
 *
 * @author sho ishijima
 */

const gulp = require('gulp');
const config = require('../config'); // 設定フォルダを読み込み
const cleanCSS = require('gulp-clean-css');// css圧縮

// css圧縮
gulp.task("css_min", () => {
  return gulp
    .src(config.source.dstDir + "/**/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/"));
});
