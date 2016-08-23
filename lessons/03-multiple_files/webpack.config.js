'use strict';

const webpack = require('webpack');
const glob = require('glob');

let config = {
  entry: {
    'script1': './src/script1.js',
    'script2': './src/script2.js',
  },
  output: {
    path: './dist',
    filename: '[name].min.js'
  }
}

// Create individual js bundles automatically!
let pages = glob.sync('./src/bunch_of_js/**/*.js');
pages.map((file) => {
  let key = file.split('/');
  key = key.slice(-1)[0];
  key = key.replace('.js', '');

  config.entry[key] = file;
});

module.exports = config;