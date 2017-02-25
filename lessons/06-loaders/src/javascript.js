
const division = (x, y) => {
  if (y === 0) {
    return 'I will divide you by zero!!!'
  }
  return x / y;
}

const divide = division(16,2);
let el = document.getElementById('es6');
el.innerHTML = `I am the fancy new ES6! Sixteen divided by 2 is ${divide}`;