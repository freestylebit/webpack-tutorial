# It's node after all!

It's not webpack related, but remember that your webpack.config.js file is an executable nodejs file. Which means you can write javascript to incorporate logic into your configuration. It's useful for stuff like:

* Automagically collecting a list of all files into a part of the configuration array
* Toggling between configurations for different environments
* Enabling certain plugins based for certain situations

```
NODE_ENV=dev webpack
```

This should...FINISH THIS SENTENCE

```
NODE_ENV=notdev webpack
```

## Got it!

```bash
cd ../07-loaders__injecting_css
```
