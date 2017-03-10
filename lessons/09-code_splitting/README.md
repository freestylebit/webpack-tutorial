# Code Splitting

It's ideal to only call AJAX requests only when we need them, but what if we want load static assets when we need them?  If the full payload of our single page application (SPA) is large (let's say 10MB), wouldn't we want to break them up and load the assets only when the user needs it?

Webpack offers a feature called *code splitting*, and it requires nothing special in `webpack.config.js` (you can ignore that file now).  Instead, it implements the ECMA standard (or the old CommonJS standard) to allow code to load a bundle and execute it!

```
webpack
```

For this demo, we're going to need a server to provide us with some useful information in the browser's console.

```
node_modules/.bin/http-server
```

Go here: [http://127.0.0.1:8080/dist/](http://127.0.0.1:8080/dist/) and open your browser's console and switch to the `network` tab.

Clicking on each of the links will yield a new bundle delivered to your browser. This is a great way to delay loading of certain static assets until you trigger an event to load them!

![Network tab example](https://d3uepj124s5rcx.cloudfront.net/items/0w1j38411j0K1w2Z0t47/Screen%20Recording%202017-03-10%20at%2012.01%20AM.gif)

For more information, check out their [documentation](https://webpack.js.org/guides/code-splitting/).

(Psst! You can hit `ctrl + c` to kill the server now)

# Boo yah!

[cd ../10-tree_shaking](https://github.com/freestylebit/webpack-tutorial/tree/master/lessons/10-tree_shaking)
