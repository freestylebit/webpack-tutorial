# Multiple files

The entry array is, after all, an array.  You can put in as many elements as you'd like, and each key-pair will represent a bundle webpack will generate for you!  Try it out!

```
webpack
```

One other thing I want to point out: `webpack.config.js` is a javascript file, after all.  Webpack requires some sort of JSON object to know what to do, but you can mock the JSON array using pure node javascript.  In this example, I employed the [glob](https://github.com/isaacs/node-glob) to poll the `bunch_of_js` directory and automagically enter in all the js files there.  Convenient so you don't have to put in an entry in `webpack.config.js` every time you introduce a new file into the pipeline!

# Woot! More!

[cd ../04-multiple_in_one](https://github.com/freestylebit/webpack-tutorial/tree/master/lessons/04-multiple_in_one)
