/**
 * sass
 *
 * @author sho ishijima
 */

const gulp = require('gulp');
const config = require('../config'); // 設定フォルダを読み込み
const sass = require('gulp-sass');
const cmq = require("gulp-combine-media-queries"); //メディアクエリを一箇所に
const plumber = require('gulp-plumber'); //強制停止を防止
const cache = require('gulp-cached'); //変更されたファイルだけを対象
const notify = require('gulp-notify'); //デスクトップに通知を表示
const pleeease = require('gulp-pleeease');
const crLfReplace = require ('gulp-cr-lf-replace');
const convertEncoding = require ('gulp-convert-encoding');

// style.scssをタスクを作成する
gulp.task("sass", () => {
  // .scssファイルを取得
  return gulp
    .src(config.source.srcDir + "/**/*.scss")
    .pipe(
      plumber({
        errorHandler: notify.onError("<%= error.message %>") //エラー通知
      })
    ) //強制停止を防止
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    ) // scss → cssのコンパイル（書き出し）方法
    .pipe(cmq())
    .pipe(
      pleeease({
        rem: { rootValue: "10px" },
        autoprefixer: {
          browsers: ["iOS 10", "Android 4.4", "last 2 version"]
        },
        opacity: false,
        minifier: false // 圧縮しない場合：false
      })
    )
    .pipe(cache()) // 更新されたファイルのみ対象
    .pipe(
      notify({
        title: "Sassをコンパイル！",
        message: new Date()
      })
    )
    .pipe(crLfReplace({ changeCode: "CR+LF" })) // 改行コード変更
    .pipe(convertEncoding({ to: "UTF-8" })) // 文字コード変更
    .pipe(gulp.dest(config.source.dstDir));
});