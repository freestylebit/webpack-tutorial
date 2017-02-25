// Don't tell anyone I stole this from
// https://github.com/Microsoft/TypeScriptSamples/blob/master/greeter/greeter.ts

class Greeter {
  constructor(public greeting: string) { }
  greet() {
    return this.greeting;
  }
};

var greeter = new Greeter("Yo soy Typescript!");
var el = document.getElementById('typescript');
el.innerHTML = greeter.greet();
