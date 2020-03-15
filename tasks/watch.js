/**
 * watch
 *
 * @author sho ishijima
 */

const gulp = require('gulp');
const config = require('../config'); // 設定フォルダを読み込み

// watch機能
// 直列処理（series）
gulp.task('watch', (done) => {
  gulp.watch([config.source.srcDir + "/**/*.pug"], gulp.series("pug", "bs-reload"));
  gulp.watch([config.source.srcDir + "/**/*.scss"], gulp.series("sass", "bs-reload"));
  gulp.watch([config.imgSource.srcDir + "/**/*.+(jpg|jpeg|png|gif|svg)"], gulp.series("img_min", "bs-reload"));
  done();
});

// 並列処理（parallel）
gulp.task(
  "default",
  gulp.parallel("bro", "watch", function(done) {
    done();
  })
);