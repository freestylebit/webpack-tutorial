
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
addEvent('jquery', 'click', function () {
  import('./chunk1.js').then(function(moment) {
    var chunk = require('./chunk1.js')();
    document.getElementById('content').innerHTML = 'jQuery loaded!';
  });
});

addEvent('react', 'click', function () {
  import('./chunk2.js').then(function(moment) {
    var chunk = require('./chunk2.js')();
    document.getElementById('content').innerHTML = 'React loaded!';
  });
});

addEvent('angular2', 'click', function () {
  import('./chunk3.js').then(function(moment) {
    var chunk = require('./chunk3.js')();
    document.getElementById('content').innerHTML = 'Angular2 loaded!';
  });
});

addEvent('angular1', 'click', function () {
  import('./chunk4.js').then(function(moment) {
    var chunk = require('./chunk4.js')();
    document.getElementById('content').innerHTML = 'Angular loaded!';
  });
});

addEvent('html', 'click', function () {
  require.ensure(['./chunk5.js'], function(require) {
    var chunk = require('./chunk5.js')();
    document.getElementById('content').innerHTML = '...because HTML is a programming language!';
  });
});
