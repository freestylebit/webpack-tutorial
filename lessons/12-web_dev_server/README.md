# Webpack Dev Server

Now that you know how awesome webpack can be for your pipeline, it's now time to start rapidly developing your code with it!  Sure you could run:

```
webpack
```

...but that could get tedious.  You instead run a watch to have webpack automatically detect any new changes and recompile them on demand!

```
webpack --watch
```

Try making a few changes and watch your terminal spew out new changes!  (`Ctrl + C` to kill the process when you're done).

One thing to note here is the webpack is intelligent enough to only update the assets you made changes to and not the entire tree. For example, if you have the watch running and you make changes to `src/b.js`, it'll only make updates to that and `c.js`, but `a.js` won't change because it's unaffected by the change.  The system of module imports makes this possible so that you don't have to wait for webpack to regenerate bundles for third party libraries you know will never change (just on the first load).

# But what if I am lazier?

Most projects will make use of the [webpack development server](https://github.com/webpack/webpack-dev-server).  It creates a live server environment that webpack throws its output to.  Your web pages will then reference that location to load the assets from there.

Don't be shy, try it out! We'll use the one in our `node_modules/` directory so you don't have to install it globally yet (but you will after you give this a spin).

```
node_modules/.bin/webpack-dev-server
```

Now make some changes to any of the files in `src/` and watch your browser automatically update itself when a need for you to refresh! Much more convenient, right?

# Ok, this is great, but I just ran into an error, and debugging webpack bundles is painful

Because the browser only reads whatever webpack generates, it won't know where the original code came from.  This is where source maps come in.  It's dictated by another configuration key in `webpack.config.js` called `devtools`.  Much simpler in v2, just assign it to `source-maps` and you're good to go (other values can be used, but we'll stick with this for the sake of our demo).

Now let's intentionally make an error in our code.  Like go into `b.js` and execute a non-existent function (try `asdf()`).  Restart the webpack-dev-server.

In your console, you should see this:

![Bad debugging](https://d3uepj124s5rcx.cloudfront.net/items/1B2c46393T203f0z2q40/Screen%20Recording%202017-03-10%20at%2012.49%20AM.gif)

Now let's uncomment line 18 in `webpack.config.js`.  Restart the server.

![Good debugging](https://d3uepj124s5rcx.cloudfront.net/items/450s1E3i3Q333O113f1d/Screen%20Recording%202017-03-10%20at%2012.51%20AM.gif)

Source maps should guide your browser to the correct location of the error rather than the bundle.

# That's a wrap!

I hope this ends up being a good resource for whatever dauting task you have on hand! My intention is to provide you a starting point to tinker and experiment with different configurations to better understand webpack's behaviors.  Now that we have working demos, feel free to try something that you've always wanted to try in any of the demos!

Thanks, y'all!
