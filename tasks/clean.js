'use strict';

/**
 * DEPENDENCIES
 */
const config = require('./config');
const del = require('del');

/**
 * CLEAN
 */
function clean() {
    return del([
        config.pages.output,
        config.scripts.output,
        config.styles.output,
        config.fonts.output,
        config.images.output
    ]);
}

clean.displayName = 'Clean';
clean.description = 'Clean page files';

module.exports = clean;
