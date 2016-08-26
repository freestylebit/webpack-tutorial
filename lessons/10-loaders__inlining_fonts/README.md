# Inlining Fonts

## Fonts, fonts, fonts!

Our favorite CSS loader can also parse through external assets that are needed.  However, the key thing to note here is that even if another static asset defines other dependencies, we still need to teach webpack how to preprocess those assets so they show up correctly on compilation.

Whenever you have these thoughts/problems during development, this is where you need to search for a loader that handles this.  In this case, url-loader does a good job converting whatever asset in your regex into base64, though the file-loader is a good candidate, too.

```bash
npm i --save url-loader file-loader
```

```js
{
  test: /\.(eot|ttf|woff2?)(\?.*$|$)/,
  loader: 'url-loader'
  // The following works, too, assuming you have a web server set up.
  // loader: 'file?name=some_dir/[name].[ext]'
}
```

*In this loader definition, I left a piece of configuration commented out.  Toggle the url and the file loader lines and you can see how webpack Drops the font file used in this demonstration as a file rather than a base 64 item.  This may be useful depending on your use case.*

## We there yet?

```bash
cd ../11-consolidation
```
