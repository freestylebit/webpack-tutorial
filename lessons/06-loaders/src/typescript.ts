// Don't tell anyone I stole this from
// https://github.com/Microsoft/TypeScriptSamples/blob/master/greeter/greeter.ts

let add = function(x: number, y: number): number { return  x + y + 1; };

class Greeter {
  constructor(public greeting: string) { }
  greet() {
    return this.greeting;
  }
};

const greeter = new Greeter(`Yo soy Typescript! <em>2 + 2 = ${add(2,2)}</em>`);
let el = document.getElementById('typescript');
el.innerHTML = greeter.greet();
