'use strict';

/**
 * DEPENDENCIES
 */
const gulp = require('gulp');
const config = require('./config');
const fontmin = require('gulp-fontmin');
const ttf2woff2 = require('gulp-ttf2woff2');
const filter = require('gulp-filter');

/**
 * FONTS
 * @type {string}
 */
const text = `
АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ
абвгдеёжзийклмнопрстуфхцчшщъыьэюя
ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789
!@#$%^&*()_+-={}[]|":;'><?,./«»№`;

function fonts() {
    return gulp.src(config.fonts.input)
        .pipe(fontmin({
            text: text,
            hinting: false,
            deflate: true
        }))
        .pipe(gulp.dest(config.fonts.output))
        .pipe(filter('**/*.ttf'))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(config.fonts.output));
}

fonts.displayName = 'Fonts';
fonts.description = 'Minify fonts';

module.exports = fonts;
