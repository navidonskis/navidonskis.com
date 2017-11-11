const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const inBuild = process.argv.indexOf('-p') === 1;

module.exports = {
    // Here the application starts executing
    // and webpack starts bundling
    entry: ['./src/index.js', './src/scss/app.scss'],  // string | object | array
    // options related to how webpack emits results
    output: {
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        // the filename template for entry chunks
        filename: 'app.bundle.js',
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
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'sass-loader'
            //     ],
            // }
        ],
    },

    plugins: Object.assign([
            new ExtractTextPlugin({ // define where to save the file
                filename: 'app.bundle.css',
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
