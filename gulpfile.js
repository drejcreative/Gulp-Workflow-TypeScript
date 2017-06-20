(function() {
    "use strict";

    var gulp = require('./gulp')([
        'styles',
        'browserSync',
        'optimization',
        'scripts'
    ]);

    gulp.task('default', ['sync', 'spriteSvg', 'typeScript'], function() {});
    gulp.task('build', ['sass', 'spriteSvg', 'fonts'], function() {});

}());
