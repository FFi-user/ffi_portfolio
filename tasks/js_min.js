/**
 * js_min
 *
 * @author sho ishijima
 */

const gulp = require('gulp');
const config = require('../config'); // 設定フォルダを読み込み
const uglify = require('gulp-uglify');// js圧縮

// js圧縮
gulp.task("js_min", () => {
  return gulp
    .src(config.source.dstDir + "/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
});
