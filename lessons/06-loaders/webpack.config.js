'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    all: [
      './src/typescript.ts',
      './src/coffeescript.coffee',
      './src/javascript.js',
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
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}

module.exports = config;