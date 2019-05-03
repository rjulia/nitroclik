
const gulp = require('gulp');
gulp.task('copy', (cb) => {
  // body omitted
  gulp.src('./src/statics/*.js')
    .pipe(gulp.dest('./build/static/'));
  cb()
});