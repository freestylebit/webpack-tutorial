'use strict';

const webpack = require('webpack');
const glob = require('glob');

console.log(process.env.NODE_ENV);

// This will be useful later...
const development = process.env.NODE_ENV === 'dev';

let config = {
  entry: {
    // An example of how I can jam all my custom javascript
    // into one bundle.
    'scripts': glob.sync('./js/**/*.js'),
  },
  output: {
    path: './dist',
    filename: !development ? '[name].[chunkhash].js' : '[name].js'
  }
}

// An example of how you can attach certain configurations based on environment.


module.exports = config;