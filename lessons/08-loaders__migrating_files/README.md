# Migrating Files

## Javascript files aren't the only things you can add to the entry array...

Sometimes you might want to migrate files individually based on your project's architecture.  In theory, you can throw any file type into the entry array!  Check out what I did here:

```js
...
entry: {
  'page': './src/page.html',
}
...
```

...as long as the appropriate loader is present.  In this case, we had to throw in the file loader to have it so our HTML file gets ported over correctly:

```bash
npm install --save file-loader
```

```js
  {
    test: /\.html?$/,
    loader: "file?name=some_dir/[name].[ext]"
  },
```

The **loader** attribute in this array dictates that we want to tap into the file-loader to handle how our output is created in dist/.  For this example, we're simply instructing it to throw any file with the .html extension to dist/some_dir/.

Read up on your loader's documentation to see what other neat parameters you can add to the loader parameters.  There's a lot that can be covered here, but for the sake of this tutorial, we're going to keep things simple.

See the resulting page by cracking open dist/some_dir/page.html.

## Batter up!

```bash
cd ../09-loaders__file_limit
```
