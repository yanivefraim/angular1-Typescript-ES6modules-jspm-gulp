'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var config = require('../../config').sass.production;
gulp.task('sass-deploy', function () {
    gulp.src(config.source)
        .pipe(sass().on('error', sass.logError))
        .pipe(flatten())
        .pipe(gulp.dest(config.dest));
});
