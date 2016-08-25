# Adding third party dependencies

## Where's my src/ directory!?!??!?!

Don't worry, you don't need it for this exercise.

## For when you don't feel like writing libraries...

Reduce, reuse, recycle!  We always want to try and use another module if it gets the job done faster and it's been peer reviewed by the community #opensource #ftw!  npm is a huge ecosystem of modules developers can tap into to expedite their process, so ideally we want to include some of these great modules into our projects painlessly!

Up until now, we've been referencing javascript files we wanted to include internally like this:

```js
require('./myscript.js');
```

When referencing anything from your node_modules/ directory, simply do it like you do in any other node project (without the ./ in this case).  Your project will recognize it right away!

```js
require('jquery');
```

Give it a shot now!  Prep your command line:

```bash
webpack
```

And see your new results in the dist/ directory.  This might take slightly longer than our previous lessons as we're now packing some big modules, but when it's done you should see a result file with all the third party library code mixed in!

## Woot!
```bash
cd ../06-automatic_entry
```
