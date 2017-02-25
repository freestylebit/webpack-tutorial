###
I did not steal this from http://coffeescript.org/
###

square = (x) -> x * x
cube   = (x) -> square(x) * x

document
  .getElementById 'coffeescript'
  .innerHTML = """ I\'m Coffeescript! Square of 3 is #{square(3)} and Cube of 7 is #{cube(3)} """
