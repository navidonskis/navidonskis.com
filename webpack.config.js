const path = require('path');

module.exports = {
  'entry': {
    'app': './src/ts/app.ts'
  },
  'resolve': {
    'extensions': ['.ts', '.js']
  },
  'output': {
    'path': path.resolve(__dirname, 'assets'),
    'filename': '[name].min.js'
  },
  'devtool': 'source-map',
  'devServer': {
    'open': true,
    'publicPath': '/assets/'
  },
  'module': {
    'rules': [
      {
        'test': /\.ts?$/,
        'use': 'ts-loader',
        'exclude': /node_modules/
      }
    ]
  },
};
