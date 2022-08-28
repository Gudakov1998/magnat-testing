'use strict';

const {  src, watch, series, dest} = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');
const less = require('gulp-less');
const path = require('path');

exports.less = function () {
    return src(['./src/styles/style.less', './src/styles/adaptive.less'])
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concatCss("main-gulp.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
};

exports.lessWatch = function () {
    watch('./src/styles/*.less', series('less'));
};
