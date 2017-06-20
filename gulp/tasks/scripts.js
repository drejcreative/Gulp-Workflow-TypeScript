var gulp = require('gulp'),
      ts = require('gulp-typescript'),
      sourcemaps = require('gulp-sourcemaps');

module.exports = function() {

    // #Scss with Autoprefixer - Adding all cross browser prefixes
    gulp.task('typeScript', function() {
      return gulp.src('app/js/**/*.ts')
      .pipe(sourcemaps.init())
      .pipe(ts({
          noImplicitAny: true,
          outFile: 'main.js'
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('app/js/'));
    });


};
