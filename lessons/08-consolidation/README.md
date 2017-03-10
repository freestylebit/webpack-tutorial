# Consolidation

Sometimes we have mutiple bundles for many pages.  Some pages require one script while others require another.  With webpack, we have no need to throw all of our javascript code into a single bundle and serve it on every page load.  We can serve only what we need!

But, in most cases, we also need a bundle that is required for every page.  It may be a vendor bundle that includes the third party libraries you're using throughout the entire site.  So typically, we may have a `vendor.js`, a `script.js` and a `script2.js` file.

Our `webpack.config.js` file has those three keys set up already, so why not run webpack and see if it creates those bundles!

```
webpack
```

It works, so we're done, right?

Take a look at the files generated in the `dist/` directory, and scroll to the bottom.  You'll notice that they all have the sum() and difference() function included in all of them.  This is not what we intended!  Actually, the files are almost identical!

Side note: Want to know why this is bad?  Throw in a `require('jquery')` into `library1.js` or `library2.js` and rerun webpack to see what happens to the bundles.  They're huge!

# Why is this happening!?!?!?

Remember that everything you add to the `entry` array is separately scoped.  Even though the bundles may have a dependency it shares, they won't know it exists in it's neighboring bundle; they're all scoped individually.

We need a way to expose the assets of `library.min.js` so that `scripts.min.js` and `scripts2.min.js` can use that instead of introducing it's own redundant copy of the same dependency!

# Common Chunks Plugin

Look in `webpack.config.js` and take a look at line 22. Uncomment that line. We're using a plugin to dictate that the `library` entry in the `entry` array is the one we want exposed to the other bundles.  Now rerun the compilation step

```
webpack
```

You should now have a large `library.min.js`, but two tiny scripts.min.js files only including the custom code it harbors. In our HTML, we can then curate and make sure `library.min.js` is included on the payload so the custom bundles can use it!

# Metal!

[cd ../09-code_splitting](https://github.com/freestylebit/webpack-tutorial/tree/master/lessons/09-code_splitting)
