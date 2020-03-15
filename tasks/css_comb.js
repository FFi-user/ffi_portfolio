/**
 * css_comb
 *
 * @author sho ishijima
 */

const gulp = require('gulp');
const config = require('../config'); // 設定フォルダを読み込み
const csscomb = require("gulp-csscomb");

// css整形
gulp.task("css_comb", () => {
  return gulp
    .src(config.source.dstDir + "/**/*.css")
    .pipe(csscomb())
    .pipe(gulp.dest("dist/"));
});