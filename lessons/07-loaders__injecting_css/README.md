# Injecting CSS

## Webpack isn't only for javascript

Webpack reads javascript out of the box.  You'll find more power once you architect your configuration file to accept other static files like json, png, jpg, css, and even html!

## But how can webpack read other languages?

This is where loaders come in.  Loaders detects a certain pattern in a file being **require()**ed, declares it as a certain type and parses it based on how it's identified.  In this example, we jam a CSS file into our sample:

```js
module: {
    loaders: [
      // CSS: scss, css
      {
        test: /\.s?css$/,
        loaders: ['style', 'css']
      }
    ]
  }
```

Since loaders are webpack modules, we need to install them from npm.  For this exercise, if you did *npm install* like I told you at the beginning, then this should run fine.  Otherwise, if this is a separate project you're working on, you might want to fire this into bash:

```bash
npm i --save css-loader style-loader
```

Otherwise, running *webpack* in bash will yield a **module not found** error.

## Let's make things work!

```bash
webpack
```

You should see one css file, but with some extra loader code from css-loader to parse the CSS code.  You should see one resulting file **script.min.js**.  However, crack open **index.html** and you should not only see a pink background but also the alert() prompt from the script, as well.

Webpack has successfully parsed both JS and CSS code into one file.  Neat how you can do it all in one step instead of maintaining a CSS and JS file separately, minimizing the number of files we load on the page at a time!

## Bazinga!

```bash
cd ../08-loaders__migrating_files
```