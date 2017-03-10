# Tree Shaking - Lodash

You've seen tree shaking using vanilla es6 javascript.  Now let's try another babel loader for a popular library, lodash!  In order to make tree shaking possible with lodash, we need to use the variant exported as [es modules](https://www.npmjs.com/package/lodash-es)!

You'll see a new entry in `.babelrc` with a plugin for lodash. It's fueled by the `babel-plugin-lodash` module.

Our script imports the entire lodash library, but uses one function in the entire suite. But with this demo's set up, we're actually not going to import the entire library. Let's try that!

```
webpack
```

In `scripts.min.js`, this is our entire code including the dependency to `compact()`

```
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = compact;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_compact__ = __webpack_require__(0);



console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_compact__["a" /* default */])([0, 0, 1, 0, 0]));
//console.log(_.uniqueId('blergh'));

/***/ })
/******/ ]);
```

Try searching for any other lodash function. It's not there!

Let's try adding another lodash function.  Feel free to use your favorite one or just uncomment my favorite one in scripts.js! When you're done:

```
webpack
```

Your new function should now be included in `scripts.min.js`!

Your bundle should be less than 4kb (about the size of lodash core), but we didn't uglify anything yet!

```
webpack -p
```

`scripts.min.js` should now be less than a kb.  Much better than including the entire lodash library!

# Wicked

[cd ../11-plugins_fun](https://github.com/freestylebit/webpack-tutorial/tree/master/lessons/10-tree_shaking_lodash)
