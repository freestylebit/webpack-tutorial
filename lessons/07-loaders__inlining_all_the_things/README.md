# Loaders - Inlining

Did you know loaders also have configurations you can apply to them? Some of the things you can do to minimize network round trips is to bundle a collection of static assets together including stuff like svgs, images, and fonts!

Take the two images we included into this demo `ri.svg` and `usa.svg`, two svgs with a large and small file size respectively. Maybe we want to inline the smaller svgs, but make separate the larger ones so they don't make our bundles too large. In this case, our `webpack.config.js` file has a clause in the svg-loader to set a file size limit for when to inline and when to reference.  Play with that number (40000 (bytes)), and see what how the two svgs are placed (try numbers like `1000` and `99999999`).

Additionally, I configured this demo to inline the fonts into the javascript bundle in minimize the number of individual font files we pass to the client.

```
webpack
```

For fun: For inspriation, check out [Christopher Chedeau's](https://speakerdeck.com/vjeux/react-css-in-js) talk on inlining CSS in React!

# Wicked!

[cd ../08-consolidation](https://github.com/freestylebit/webpack-tutorial/tree/master/lessons/08-consolidation)
