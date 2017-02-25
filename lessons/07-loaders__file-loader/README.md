# File Limits

## To be or not to be...

It's awesome you can inline static assets as base64 code in your javascript code, but sometimes that might be overkill.  What if you have images that are huge and jamming it as a variable value in your poor script.min.js will make the browser cry?  Sometimes there are cases where it's better to just load it separately and have webpack reference it instead!

I included two svg files in this lesson, one which exhibits a large file size and one that is somewhat tolerable.  For the smaller ones, we could get away with inlining it so we're not loading a ton of small icons as separate files.  The other, however, is ridiculously large.  In this case, how can we differentiate them so we intelligently bundle the small stuff together and keep the large assets out?  Pass a *limit* parameter to your loader's configuration, of course.

```js
{
  test: /\.svg(\?.*$|$)/,
  loader: 'url?limit=40000&name=img/[name].[ext]'
},
```

Run in your console:

```bash
webpack
```

Notice how ri.svg is ported over, but usa.svg doesn't exist.  However, upon opening the page.html in dist/, you see both images...what's going on here?

For visibility, I mocked these SVGs in the CSS file, so crack open your browser's inspector and check out the two divs showing these SVGs.  One should yield a huge glob of base64 messiness and the other should reference a file webpack automatically linked for you.  The loader automatically determined the sizes of these assets and compiled them for us.  In the future, all we need to do is tweak the number depending on the needs of the project!

## Weee!

```bash
cd ../10-loaders__inlining_fonts
```
