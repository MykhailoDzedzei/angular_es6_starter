// process.traceDeprecation = true;
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');

const config = {
    entry:[
        'webpack-dev-server/client?http://localhost:8080',
        path.join(APP_DIR, 'app.js')
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: "/",


    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },

            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader'
            }

        ]
    },
    devtool: 'inline-source-map',

    devServer: {
        contentBase: BUILD_DIR,
        inline: true,
        stats: 'errors-only'

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(APP_DIR, 'index.html')
        })
    ]
};

module.exports = config;
