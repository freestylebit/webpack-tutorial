# Consolidation

## Being neat is a good thing

Webpack gives us the ability to finely select how our assets gets organized (others just concatenates and minifies).  But, in most cases, our scripts defines a commonly used asset all over the place.  If we do what we've learned up until now, then our bundles could be a little inefficient.  To show you what I mean...

```bash
webpack
```

...and let's take a look at the outcomes...

script.min.js
```
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var sum = __webpack_require__(1);
	var difference = __webpack_require__(2);

	alert(sum(1,2));
	alert(difference(1,2));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function sum(first, second) {
	  return first + second;
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function difference(first, second) {
	  return first - second;
	}

/***/ }
/******/ ]);
```


library.min.js
```js
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function sum(first, second) {
	  return first + second;
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function difference(first, second) {
	  return first - second;
	}

/***/ }
/******/ ]);
```

The intent was to keep the two functions in library.min.js so all the other scripts can reference them.  However, we see that they are duplicated twice!  Why?  Recall that each key value in our entry object in our configurations are individually scoped.  Each key has no knowledge of what's in the other bundles.  But we want to centralize the dependencies we know gets repeated all over the place, so how do we resolve this?

This is where the CommonChunksPlugin becomes very useful!

## CommonChunksPlugin

Let's edit the webpack.config.js file in this demo.  Find the following:

```js
plugins: [
    // TODO: Uncomment the CommonsChuckPlugin line and see the bundles change in size!

    // Pro-tip: Order matters here.
    //new webpack.optimize.CommonsChunkPlugin(['library', 'vendor'], '[name].min.js'),
  ]
```

let's do what the TODO says.  Uncomment that last line and...

```js
webpack`
```

If you've been paying attention to the output in the console, you'll notice a difference in file sizes.

Before
```bash
Hash: 5d72cd9e8ba3e46fc70e
Version: webpack 1.13.1
Time: 448ms
         Asset       Size  Chunks             Chunk Names
     page.html  424 bytes          [emitted]
library.min.js    1.74 kB       0  [emitted]  library
   page.min.js    1.46 kB       1  [emitted]  page
scripts.min.js     1.8 kB       2  [emitted]  scripts
 vendor.min.js     409 kB       3  [emitted]  vendor
   [0] multi library 40 bytes {0} [built]
   [0] ./src/scripts.js 122 bytes {2} [built]
   [0] multi vendor 40 bytes {3} [built]
   [1] ./src/library1.js 74 bytes {0} {2} [built]
   [2] ./src/library2.js 80 bytes {0} {2} [built]
    + 36 hidden modules
```

After

```bash
Hash: 6790d053d9dfa3f7d839
Version: webpack 1.13.1
Time: 466ms
         Asset       Size  Chunks             Chunk Names
     page.html  424 bytes          [emitted]
library.min.js  431 bytes       0  [emitted]  library
   page.min.js  150 bytes       1  [emitted]  page
scripts.min.js  219 bytes       2  [emitted]  scripts
 vendor.min.js     412 kB       3  [emitted]  vendor
   [0] multi library 40 bytes {0} [built]
   [0] ./src/scripts.js 122 bytes {2} [built]
   [0] multi vendor 40 bytes {3} [built]
   [1] ./src/library1.js 74 bytes {0} [built]
   [2] ./src/library2.js 80 bytes {0} [built]
    + 36 hidden modules
```

When you test dist/page.html in both cases, you get the same functionality, but with less code.  That's because there's much less duplication involved!  Both files we viewed now looks like this!

script.min.js
```js
webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var sum = __webpack_require__(1);
	var difference = __webpack_require__(2);

	alert(sum(1,2));
	alert(difference(1,2));


/***/ }
]);
```

```js
webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function sum(first, second) {
	  return first + second;
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function difference(first, second) {
	  return first - second;
	}

/***/ }
]);
```

Did I mention that there's no code from webpack in either of these files?  They're all encapsulated in vendor.min.js now!  That's because the plugin we used properly namespaced all assets so that it assumes the other assets will be present on the page. Only caveat now is that it's your responsibility to make sure they're included (check page.html).

This should make things pretty lean going forward!

## Woohoo!

```bash
cd ../12-plugins_fun
```
