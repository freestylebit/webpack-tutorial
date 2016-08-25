# Starting Point

## But what if I want to add multiple...

...but you don't!  You'll notice that the **src/** directory has three javascript files, but your webpack configurations only lists one...

```bash
webpack
```

...but opening the page yields code from all three scripts (in this case, alerts()).  Why is that?

Webpack utilizes CommonJS so you can **require()** any asset you need.  By default, **require()** parses javascript without a hitch.  Webpack will automatically recognize these calls to require external assets and parse them in the bundle.  Neat, huh?

## In depth

script.js
```js
alert('hello webpack');

require('./script2.js');
```

script2.js
```js
alert('hello again');

require('./script3.js');
```

script3.js
```js
alert('hello for the third time!');
```

Essentially, the three files above are daisy chained together.  As long as the starting point in the configurations is specified in the input, you can let the rest of your javascript code define anything else it needs.  Eliminates the need to remember to drop any dependencies into one big file!

## Next up!

```bash
cd ../03-multiple_files
```
