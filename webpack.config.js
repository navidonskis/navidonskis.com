const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractCSS = new ExtractTextPlugin('styles.min.css');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/ts/app.ts', './src/sass/app.scss'],
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'app.min.js'
  },
  devtool: 'source-map',
  devServer: {
    open: true,
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,
        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
          {
            // After all CSS loaders we use plugin to do his work.
            // It gets all transformed CSS and extracts it into separate
            // single bundled file
            loader: MiniCssExtractPlugin.loader
          },
          {
            // This loader resolves url() and @imports inside CSS
            loader: "css-loader",
          },
          {
            // Then we apply postCSS fixes like autoprefixer and minifying
            loader: "postcss-loader"
          },
          {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        use: [
          {
            // Using file-loader for these files
            loader: "file-loader",

            // In options we can set different things like format
            // and directory to save
            options: {
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.min.css'
    })
  ]
};
