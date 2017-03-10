# Loaders!

We know what `entry` and `output` are in a webpack configuration.  From the previous five demos, we did a bunch of bundling with (es5) javascript assets only, but webpack can do more than that!  We just have to transpile it into something webpack (or the modern browser) can read! That's where loaders come in!

Loaders analyzes every `require()` or `import` statement and executes an `apply` function to the contents to transpile them bundled assets (note: it can support all the module dependency managers, including CommonJS and AMD).  In most cases, it'll transpile javascript variants like typescript and coffeescript into pure es5 javascript, LESS and SCSS into pure css, and more!

The beauty of this approach over how it was done in the past with tools like grunt and gulp is we don't have separate jobs to handle each file type. Put in the proper regex pattern, and webpack will automatically match them and apply the loaders you want individually!

This demo combines seven different languages and compiles them into a single javascript file that executes homogenous js, css, and html!  Give it a spin!

```
webpack
```

# Neat!

[cd ../07-loaders__inlining_all_the_things](https://github.com/freestylebit/webpack-tutorial/tree/master/lessons/07-loaders__inlining_all_the_things)
