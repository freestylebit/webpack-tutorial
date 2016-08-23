# Basic I/O

## First, an abstract...
Welcome!  If this is your first time here and the README.md from the base directory of this repo led you here, then you're in the right place!  If not, you can skip this section because I am about to list a few assumptions to describe why this tutorial is going to be a little different than the rest!

* The lessons are designed to work with as little as possible!  The demonstrations will mostly accept a bunch of parameters and yield the resulting bundles in another directory (most likely in dist/).  This is so you don't have to worry about debugging issues from modules that have little to do with the exercises (e.g. express).
* The lessons beyond the first few will typically exhibit a src/ and a dist/ directory.  Tinker with src/ and view the results in /dist when you execute 'webpack'.

## Finally let's get started!

We're going to start dead simple so we get into the concept of how the ins and outs of webpack works.  As you learn more, you can tinker with **webpack.config.js** to see what else you can do with the configurations (yes, I am encouraging you to break things for education)!

This is what our config looks like:

```js
'use strict';

const webpack = require('webpack');

let config = {
  entry: {
    'script': './js/script.js'
  },
  output: {
    path: './dist',
    filename: 'min.js'
  }
}

module.exports = config;
```

Simply put, we tell the configuration to bundle 'js/script.js' and yield the results in the dist/ directory under the filename *min.js*.  Give it a spin!

```bash
webpack
```

Your new file within dist/ should look like this:

```js
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	alert('hello webpack');


/***/ }
/******/ ]);
```

You can see your code embedded within a function at the bottom of this new bundle webpack created for us.  Don't worry about the stuff above.  It's important, but it shouldn't interfere with what you are ultimately acheiving.

## Misconception

You might be looking at this and wonder "dang, this is a lot more code than I need for something really simple?  Is this really a benefit?

For some people, webpack might be portrayed as a tool that *compresses* your javascript.  This can be achieved by tacking on the uglify module (see lesson 12-plugins_fun/ later) but there's a reason why the webpack documentation dictates webpack as a **bundler** and not necessarily a packer.  If this was your goal, you might as well just use something like browserify or uglify directly.

That being said, webpack is a great tool to finetune how you control packaging and preprocessing your project, which you'll learn in the later lessons.

## Ok, what's next?

```bash
cd ../02-starting_point/
```