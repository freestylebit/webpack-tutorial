'use strict';

const webpack = require('webpack');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const development = process.env.NODE_ENV === 'development';

let config = {
  entry: {
    'scripts': './src/scripts.js',
    'page': './src/page.html'
  },
  output: {
    path: './dist',
    filename: '[name].min.js'
  },
  module: {
    rules: [
      // HTML: htm, html
      {
        test: /\.html?$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.s?css$/,
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
    // We will tack plugins in the logic below.
  ]
}

if (!development) {
  config.plugins.push(
    // Compress and minify!
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
      sourceMap: false,
    }),
    // Define global variables for your bundles to use.
    new webpack.DefinePlugin({
      number: 2,
    }),
    // Prioritize chunk IDs by how often they're used.
    new webpack.optimize.OccurrenceOrderPlugin(),
    // Provides more verbose output on compile time.
    new ProgressPlugin((percentage, msg) => {
      console.log((percentage * 100) + '%', msg);
    })
  );
}

module.exports = config;