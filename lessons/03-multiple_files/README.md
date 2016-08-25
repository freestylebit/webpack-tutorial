# Multiple files

## For more than one...

This lesson aims to point out a couple things:

* You can define more than one file in your input!
* You can use node/javascript to make things easier for you!

## Multiple Inputs

Our src/ directory contains a bunch of .js files.  They all don't really relate to each other and are set up to be separate on purpose.  Up until now, you were instructed to specify only one file in your inputs.

The input part of your configuration is an array, so you can really add limitless (grain of salt here) elements depending on your needs.  Here's an example of what your configuration will look like:

```js
entry: {
  'script1': './src/script1.js',
  'script2': './src/script2.js',
},
```

With the formula we set up in our output configurations, the key to each element will map to the variable output filename we specify.  Since our pattern is [name].min.js, we will get two files: script1.min.js and script2.min.js.

## Remember that webpack.config.js is a javascript file, so you can code stuff here, too...

Webpack is expecting an object to function.  Some of the tutorials and documentation may lead you to a path where you have to mock your configuration object in a JSON file, which could work.  There is a reason why I set it up the way I did, though.

```js
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
```

Up until now, you might be thinking "I have to hard code ALL the paths manually?"  In theory, the object has nothing dynamic about it.  You must run webpack again if you want to compile with your updated specs.

That being said, there is nothing wrong with preprocessing your configuration object prior to running the compilation step.  What I did here is asked node to query the src/bunch_of_js/ directory for all javascript files (using the [glob](https://github.com/isaacs/node-glob) module) and wrote my own routine to append more entries to the entry array in the configuration object.

*If this is your first time with webpack and just came across this, it seems common sense.  It wasn't obvious to me when I first dove in, unfortunately.*

## On deck...

```bash
cd ../04-multiple_in_one
```
