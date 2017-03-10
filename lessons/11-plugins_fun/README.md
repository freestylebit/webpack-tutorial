# Plugins

Plugins are es5 classes that can perform task-runner-like functionality upon creation of your bundles.  It can range from [sounding a bell on error](https://github.com/senotrusov/bell-on-bundler-error-plugin) to uglifying your bundles for performant delivery to the front end.

There are a whole slew of them!  Here's a list from v1 as a [refernce](https://webpack.github.io/docs/list-of-plugins.html)!

This demo includes four of them. Check out `webpack.config.js` to see what they do.

In this demo, I also included an example of how you can include different pipelines depending on the environment you're on.  Useful for rigging up special configuratons for your continuous integration environment or making your code verbose in your local environment. Give the following two a try!  It currently keys off of `NODE_ENV` and `development` is the keyword it's looking for!

```
NODE_ENV=development webpack
```

```
NODE_ENV=prod webpack
```

Again, it is simply node after all!  Think of the possibilities!

# Woo hoo!

[cd ../12-web_dev_server](https://github.com/freestylebit/webpack-tutorial/tree/master/lessons/12-web_dev_server)
