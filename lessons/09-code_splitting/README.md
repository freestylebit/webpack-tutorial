# Code Splitting

## Single Page Applications now even more dynamic-er!

Webpack was created to solve this particular problem.  They even say it in [their documentation](https://webpack.github.io/docs/optimization.html)!

Essentially, the biggest problem SPA developers run into is the ability to partial load assets on demand.  If we load an SPA in its entirety, the payload to the browser can be huge.  This can be harmful to the user experience and also costly if the SPA gets lots of bounces from uninterested visitors (we still pay for that in hosting).

So if we have an SPA with, say, five pages each being 1MB, 5MB would be painful to download right off the bat, especially in a mobile app!  We want to see if we can have it so that we load those assets only if we need them.  This is where code splitting comes in.

## Ok, how does it work?

We will need a slightly different syntax to make this happen.  It's part of require(), but we also tap into a method with a callback dubbed 'ensure' like this:

```js
require.ensure(['./chunk1.js'], function(require) {
  var chunk = require('./chunk1.js');
  chunk();
  document.getElementById('content').innerHTML = 'jQuery loaded!';
});
```

Essentially, we ask that when the first line gets run that chunk1.js gets loaded into the mix.  The callback function then allows us to run code with the ensured depedencies available to us!

When you compile...

```bash
webpack
```

...and try out the page in dist/page.html, crack open your network tab in the developer tools and start clicking the links.  You'll see the assets with the arbitrary numbers load on demand and successfully load the code you need.  Webpack injects the code necessary to make this happen for you, so as long as you stick with this syntax, you should be able to achieve much leaner bundles!

## If you made it this far!

Thank you for following my tutorial.  I've covered most of what helped me create some really neat things in a few projects I've worked on, but the possibilities with webpack are endless!  With the knowledge gained here, you should be more confident in navigating the documentation to get what you need.

(Webpack documentation](https://webpack.github.io/docs/)

## Questions?

File a ticket in the [issue queue](https://github.com/freestylebit/webpack-tutorial/issues) if you have any questions and/or feedback.  File a [pull request](https://github.com/freestylebit/webpack-tutorial/pulls) if you want to submit any code changes/corrections or file a bug report.

## Cheers!
Thanks for visiting!

-freestylebit

[@freestylebit](https://twitter.com/freestylebit)