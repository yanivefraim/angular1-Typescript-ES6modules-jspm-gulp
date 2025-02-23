var gulp   = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['build','browsersync'], function() {
    gulp.watch(config.html,    ['html']);
    gulp.watch(config.sass,    ['sass']);
    gulp.watch(config.scripts, ['typescript-dev']);
});
