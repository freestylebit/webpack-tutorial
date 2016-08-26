# Plugins

## Fun stuff after the fact

Webpack allows you to tap into plugins, which handles the output after the bundles are created.  Think of it as "I want to do something with the glob of code prior to it being written to file."

You can check out [a list of plugins at your disposle](https://github.com/webpack/docs/wiki/list-of-plugins) here.  Most are very easy to integrate as they're essentially their own modules with a set of configurations you can pass to them.  For this demo, I am going to show you how to use the more popular and anticipated plugin, uglify (because our bundles are HUUUUUGEE).

```bash
webpack
```

Check the outcome in dist/.  The output is now unreadable, but also very tiny #minificationFTW.  If you comment out the plugin declaration in webpack.config.js, you can get the legible output again.

This is ideal for production (yes, you will eventually maintain multiple copies of webpack config files at some point in your project) because as your project and list of dependencies grow, the compilation step becomes slower.

## Are we there yet?

```js
cd ../13-code_splitting
```
