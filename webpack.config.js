const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const inBuild = process.argv.indexOf('-p') === 1;
const GENERATE_SOURCE_MAPS = !inBuild;

const CSS_LOADER_CONFIG = [
    {
        loader: 'css-loader',
        options: {
            sourceMap: GENERATE_SOURCE_MAPS,
        },
    },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: GENERATE_SOURCE_MAPS,
            includePaths: glob.sync('node_modules').map((d) => path.join(__dirname, d)),
        },
    },
];

module.exports = {
    // Here the application starts executing
    // and webpack starts bundling
    entry: ['./src/index.js', './src/scss/app.scss'],  // string | object | array
    // options related to how webpack emits results
    output: {
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        // the filename template for entry chunks
        filename: 'app.min.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: CSS_LOADER_CONFIG,
                })
            },
        ],
    },

    plugins: Object.assign([
            new ExtractTextPlugin({ // define where to save the file
                filename: 'app.min.css',
                allChunks: true,
                disable: inBuild
            }),
        ],
        !inBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false,
                },
            }),
        ]
    )
};
