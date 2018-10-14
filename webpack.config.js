// DEPENDENCIES
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./tasks/config');
const webpack = require('webpack');

// CONFIG
module.exports = {
    target : 'web',
    context: path.resolve(__dirname, './src'),
    entry  : {
        app      : ['babel-polyfill', './common/scripts/app'],
        selectors: './common/scripts/selectors',
        preloader: './common/scripts/preloader'
    },
    output: {
        filename: '[name].js',
        path    : path.resolve(__dirname, config.scripts.output)
    },
    module: {
        rules: [{
            test: /\.css/,
            use : [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            test   : /\.js$/,
            exclude: /(bower_components)/,
            use    : {
                loader : 'babel-loader',
                options: {
                    presets       : ['env'],
                    cacheDirectory: true
                }
            }
        }, {
            test   : /\.twig$/,
            exclude: /(node_modules|bower_components)/,
            use    : {loader: 'twig-loader'}
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: './../styles/[name].css'}),
        new CleanWebpackPlugin([
            path.resolve(__dirname, config.scripts.output)]
        ),
        new webpack.ProvidePlugin({$: 'jquery'})],
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/components'),
            common    : path.resolve(__dirname, './src/common'),
            jquery    : 'jquery'
        }
    },
    devtool: 'inline-cheap-module-source-map'
};
