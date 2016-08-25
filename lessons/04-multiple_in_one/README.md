# Multiple files in One

## For when you want one single easy package...

You're not limited to assigning each file in your src/ to their own separate file.  This is where webpack shines.  The entry array in your configuration object is an array, but it can be made multi-dimentional!

```js
entry: {
  'script': [
    './js/script1.js',
    './js/script2.js',
  ]
},
```

Here, we put the code encapsulated in script1.js and script2.js into a single package which eventually ends up being script.min.js in this example!  The output is relatively simple and organized when you see it:

```js
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	alert('hello webpack');


/***/ },
/* 2 */
/***/ function(module, exports) {

	alert('hello again');


/***/ }
/******/ ]);
```

One of the purposes of using webpack is to minimize the number of individual files being loaded into the browser on page load as it can contribute to the jankiness of the user experience.  Most minifiers concatenates the compressed code together and calls it a day.  You now have the ability to control how this is done now!

## Next, next, NEXT!
```bash
cd ../05-npm_modules
```
