'use strict';

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
  entry: {
    'page': './src/page.html',
    'scripts': './src/script.js',
  },
  output: {
    path: './dist',
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      // HTML: htm, html
      {
        test: /\.html?$/,
        loader: "file-loader?name=[name].[ext]"
      },
      // SVGs: svg, svg?something
      {
        test: /\.svg(\?.*$|$)/,
        loader: 'svg-url-loader?limit=40000&name=img/[name].[ext]'
      },
      // CSS: scss, css
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }]
      },
    ]
  },
  plugins: [
    // This is an example of how you can flatly copy files from one
    // location to another (within the context of output).
    new CopyWebpackPlugin([
      {
        from: 'src/*.pdf',
        to: 'files',
      },
    ]),
  ]
}

module.exports = config;