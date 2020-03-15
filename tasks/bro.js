/**
 * bro
 *
 * @author sho ishijima
 */

const gulp = require('gulp');
const config = require('../config'); // 設定フォルダを読み込み
const browserSync = require('browser-sync');
const ssi = require('connect-ssi');

gulp.task("bro", () => {
  return browserSync.init({
    server: {
      baseDir: config.source.dstDir, // ルートとなるディレクトリを指定
      port: 3001,
      middleware: [
        ssi({
          baseDir: config.source.dstDir,
          ext: ".html"
        })
      ]
    },
    startPath: config.start.path,
    open: "external",
    online: true,
    notify: false
  });
});

//ブラウザリロード
gulp.task("bs-reload", (done) => {
  browserSync.reload();
  done();
});