# Webpack Tutorial for Mortals

## A Supplement for Recent Talks
https://www.meetup.com/DC-JavaScript/events/237892043/
https://moduscreate.com/events/nova-js-meetup-webpack-for-practical-mortals/

## Getting Started
If this is your first time with this tutorial, you'll need to set up your computer first.  Provided you have installed [node](https://nodejs.org/en/download/package-manager/) and [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) in your system, follow this page to [install webpack](https://webpack.github.io/docs/installation.html) globally (this is key).

```
npm install -g webpack
```
or (if you use yarn):
```
yarn global webpack
```
When you're good, clone this repo and install the required modules:

```bash
git clone git@github.com:freestylebit/webpack-tutorial.git
cd webpack-tutorial/
npm install
```
or (if you use yarn, replace the last command with):
```
yarn
```

## General Flow
If this is your first time here, start with the first lesson and follow the README.md for additional guidance:

[cd lessons/01-basic_io/](https://github.com/freestylebit/webpack-tutorial/tree/master/lessons/01-basic_io)

In general, navigate to the **lessons/** directory and go through each directory one by one. There should be a README.md that should give you a synopsis on what the webpack configurations do.

This repo is written with the expectation everyone starts from page one (in this case, 01-basic_io) since each lesson has its own special steps for compilations.


## Don't be shy.  Hack away!

I rigged up these examples to highlight some of the start features of webpack (and this is still the surface). Give it a spin the first time round, but feel free to try and break things to see how webpack reacts. It's a good way to experiment and learn the inner quirks of how the tool works!

## Note

* If you run `npm install` or `yarn` in the root of this repo, you should have all the dependencies you need installed (the `node_modules/` directory in each demo are simple symlinks to the one in the root). However, for your sake, I also made sure the `package.json` file in each demo reflects what you need to make the demo work, so you can reference them for your own benefit!

## Questions?

File a ticket in the [issue queue](https://github.com/freestylebit/webpack-tutorial/issues) if you have any questions and/or feedback.  File a [pull request](https://github.com/freestylebit/webpack-tutorial/pulls) if you want to submit any code changes/corrections or file a bug report.

## Cheers!
Thanks for visiting!

-freestylebit

[@freestylebit](https://www.twitter.com/freestylebit)
