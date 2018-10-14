'use strict';

/**
 * DEPENDENCIES
 */
const gulp = require('gulp');
const config = require('./config');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

/**
 * PAGES
 * @returns {*}
 */
function styles() {
    return gulp.src(config.styles.base)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.styles.output));
}

styles.displayName = 'Styles';
styles.description = 'Convert scss on css';

module.exports = styles;
