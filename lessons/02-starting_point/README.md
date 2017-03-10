# Starting Point

Same set up as the last demo except that we have three scripts going into a single bundle. `webpack.config.js` still points to `script.js`, but if you look inside that javascript file, you'll notice that it has a require statement pointing to `script2.js` and that references another javascript file `script3.js`.

If you give webpack a starting point, it'll navigate through your tree of dependencies and bundle them together for you.  Convenient, right?  Give it a shot!

```
webpack
```

# Cool stuff!

```
cd ../03-multiple_files
```
