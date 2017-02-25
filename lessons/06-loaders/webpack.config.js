'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    all: [
      // Javascript
      './src/typescript.ts',
      './src/coffeescript.coffee',
      './src/javascript.js',

      // Stylesheets
      './src/sass.scss',
      './src/less.less',

      // Templates
      './src/markdown.js',
      './src/handlebars.js',
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
      // Javascript Loaders
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
      },

      // Stylesheets
      {
        test: /\.scss$/,
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
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'less-loader'
        ]
      },

      // Templates
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
          }
        ]
      },
      {
        test: /\.handlebars$/,
        loader: "handlebars-loader"
      }
    ]
  }
}

module.exports = config;