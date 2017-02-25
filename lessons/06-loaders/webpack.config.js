'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    all: [
      './src/typescript.ts',
      './src/coffeescript.coffee'
    ]
  },
  output: {
    filename: 'dist/all_in_one.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [
          {
            loader: 'coffee-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
}

module.exports = config;