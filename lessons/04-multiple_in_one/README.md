# Multiple files in One

Fun fact! You can even define all your dependencies in your key pair in the `entry` array! Just point your bundle key to another array, and define the bundles that belong to it!

```
webpack
```

Note that in `webpack.config.js`, I didn't hardcode the output file name anymore.  Webpack introduces several dynamic variables into the `output` array to generate bundles in relation to your `entry` keys. In this case, you should expect `script.min.js` to appear in the `dist/` directory!

# Boom!

[cd ../05-npm_modules](https://github.com/freestylebit/webpack-tutorial/tree/master/lessons/05-npm_modules)
