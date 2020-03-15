/**
 * pug
 *
 * @author sho ishijima
 */

const gulp = require('gulp');
const config = require('../config'); // 設定フォルダを読み込み
const pug = require('gulp-pug');
const plumber = require('gulp-plumber'); //強制停止を防止
const cache = require('gulp-cached'); //変更されたファイルだけを対象
const notify = require('gulp-notify'); //デスクトップに通知を表示
const crLfReplace = require("gulp-cr-lf-replace");
const convertEncoding = require("gulp-convert-encoding");

// pugの設定
gulp.task("pug", () => {
  return gulp
    .src([
      config.source.srcDir + "/**/*.pug",
      "!" + config.source.srcDir + "/**/_*.pug"
    ])
    .pipe(
      plumber({
        errorHandler: notify.onError("<%= error.message %>") //エラー通知
      })
    ) //強制停止を防止
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(cache()) // 更新されたファイルのみ対象
    .pipe(
      notify({
        title: "pugをコンパイル！",
        message: new Date()
      })
    )
    .pipe(crLfReplace({ changeCode: "CR+LF" })) // 改行コード変更
    .pipe(convertEncoding({ to: "UTF-8" })) // 文字コード変更
    .pipe(gulp.dest(config.source.dstDir));
});