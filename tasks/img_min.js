/**
 * img_min
 *
 * @author sho ishijima
 */

const gulp = require('gulp');
const config = require('../config'); // 設定フォルダを読み込み

// 必要なプラグインの読み込み
const changed  = require('gulp-changed');//変更があったファイルを処理
const plumber = require('gulp-plumber'); //強制停止を防止
const notify = require('gulp-notify'); //デスクトップに通知を表示
const imagemin = require('gulp-imagemin');// 画像圧縮
const imageminJpg = require('imagemin-jpeg-recompress');
const imageminGif = require('imagemin-gifsicle');
const imageminSvg = require("gulp-svgmin");// 画像圧縮
const imageminPng = require('imagemin-pngquant');// 圧縮率を高めるのにプラグインを入れる png
const mozjpeg = require('imagemin-mozjpeg');// 圧縮率を高めるのにプラグインを入れる jpg

// jpg,png,gif,svg画像の圧縮タスク
gulp.task("img_min", () => {
  const srcGlob = config.imgSource.srcDir + "/**/*.+(jpg|jpeg|png|gif|svg)";
  const dstGlob = config.imgSource.dstDir;
  return gulp
    .src(srcGlob)
    .pipe(changed(dstGlob))
    .pipe(
      plumber({
        errorHandler: notify.onError("<%= error.message %>") //エラー通知
      })
    ) //強制停止を防止
    .pipe(
      notify({
        title: "画像を圧縮！",
        message: new Date()
      })
    )
    .pipe(
      imagemin([
        imageminPng({
          quality: "60-80",
          speed: 1,
          floyd: 0
        }),
        imageminJpg({
          quality: 85,
          progressive: true
        }),
        mozjpeg({
          quality: 85,
          progressive: true
        }),
        imageminGif({
          interlaced: false,
          optimizationLevel: 3,
          colors: 180
        }),
        imageminSvg()
      ])
    )
    .pipe(gulp.dest(dstGlob));
});