# Starting Point

## But what if I want to add multiple...

...but you don't!  You'll notice that the **src/** directory has three javascript files, but your webpack configurations only lists one...

```bash
webpack
```

...but opening the page yields code from all three scripts (in this case, alerts()).  Why is that?

Webpack utilizes CommonJS so you can **require()** any asset you need.  By default, **require()** parses javascript without a hitch.  Webpack will automatically recognizes these calls to require external assets and parse them in the bundle.  Neat, huh?

