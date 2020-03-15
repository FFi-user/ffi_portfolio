/**
 * img_resize
 *
 * @author sho ishijima
 */

const gulp = require('gulp');
const imageResize = require('gulp-image-resize');

const resizeOptions = {
  width : 360,
  height : 360,
  gravity : 'Center',
  crop : true,
  upscale : false,
  imageMagick : true
};

gulp.task("img_resize", () => {
  return gulp
    .src("src/resize*.+(jpg|jpeg|png|gif|svg)")
    //リサイズのオプションを指定
    .pipe(imageResize(resizeOptions))
    .pipe(gulp.dest("dist/"));
});