# Tree shaking

Tree shaking is a relatively new concept which is essentially an algorithm for removing unused imports.  It's something [rollup.js](http://rollupjs.org/) introduced into the community to deliver more optimized bundles to production!

Webpack incorporated this feature into its core features for version 2!  As long as your code is set up in a modular way (easy, stick with `import`s and `require`s), webpack will be able to only include only the dependencies you need!

Note: I included two examples of tree shaking to show how different loaders handle this functionality. Try this one out, then mosey on over to the next one for an example with a well-known library.

Let's introduce our own library of helper functions in `needed.js`:

```
export default function needed(first, second) {
    console.log('needed'); return first + second;
};

export function unneeded1(third, fourth) {
    console.log('unneeded1'); return third * fourth;
};
export function unneeded2(fifth, sixth) {
    console.log('unneeded2'); return fifth / sixth;
};
```

Our `script.js` looks like:

```
import needed
//,{unneeded1}
from './needed.js';

alert(needed(3, 7));
//alert(unneeded1(3, 7));
```

Another thing to note is the `.babelrc`, which tells the `babel-loader` in our `loaders` array in `webpack.config.js` to transpile to `es2015` without using CommonJS, since it can render certain references to objects as live, preventing from webpack from assessing it properly ([Reference](https://medium.com/modus-create-front-end-development/webpack-2-tree-shaking-configuration-9f1de90f3233#.vn6zva1c2))

Now let's compile this!

```
webpack
```

If you look at `dist/scripts.min.js`, you'll find something like this:

```
"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = needed;
/* unused harmony export unneeded1 */
/* unused harmony export unneeded2 */

function needed(first, second) {
    console.log('needed');return first + second;
};

function unneeded1(third, fourth) {
    console.log('unneeded1');return third * fourth;
};
function unneeded2(fifth, sixth) {
    console.log('unneeded2');return fifth / sixth;
};
```

Don't be alarmed. We know webpack recognizes that the `unneeded` functions aren't being used, hence the `unused harmony export`.  We will never deploy un-minified assets to production, so let's productionize this!

```
webpack -p
```

I added the console logs in the code intentionally to make it easier to find the function's code (since it does some obfuscation during compilation). Now open `dist/scripts.min.js` and search for "needed".  You should only find one instance there!

Now go back to `src/scripts.js` and uncomment the two lines (3 and 7) and run webpack in production mode.

```
webpack -p
```

Again, search for "needed". You should get two hits. See your newly used function?  :D

# Awesome!

[cd ../10-tree_shaking_lodash](https://github.com/freestylebit/webpack-tutorial/tree/master/lessons/10-tree_shaking_lodash)
