
/**
 * Roll my own event listener thingy.  You can ignore this block for now...
 * Will not lie.  Stole this from http://stackoverflow.com/a/6348597
 */
function addEvent(elementID, event, funct){
  var element = document.getElementById(elementID);

  if (element.attachEvent)
    return element.attachEvent('on'+event, funct);
  else
    return element.addEventListener(event, funct, false);
}

/**
 * Pay attention now...
 */
addEvent('jquery', 'click', () => {
  import('./chunk1.js').then(c => {
    c();
    document.getElementById('content').innerHTML = 'jQuery loaded!';
  }).catch(function(err) {
    console.log('Failed to load jQuery', err);
  });
});

addEvent('react', 'click', () => {
  import('./chunk2.js').then(c => {
    c();
    document.getElementById('content').innerHTML = 'React loaded!';
  }).catch(function(err) {
    console.log('Failed to load React', err);
  });
});

addEvent('angular2', 'click', () => {
  import('./chunk3.js').then(c => {
    c();
    document.getElementById('content').innerHTML = 'Angular2 loaded!';
  }).catch(function(err) {
    console.log('Failed to load Angular2', err);
  });
});

addEvent('angular1', 'click', () => {
  import('./chunk4.js').then(c => {
    c();
    document.getElementById('content').innerHTML = 'Angular loaded!';
  }).catch(function(err) {
    console.log('Failed to load Angular', err);
  });
});

addEvent('html', 'click', () => {
  // This is how we used to do it in webpack 1. It still works as it still serves
  // some useful functionality over the import promise.
  // Reference: https://webpack.js.org/guides/code-splitting-import/#import-supersedes-require-ensure-
  require.ensure(['./chunk5.js'], require => {
    var chunk = require('./chunk5.js')();
    document.getElementById('content').innerHTML = '...because HTML is a programming language!';
  });
});
