// Don't tell anyone I stole this from
// https://github.com/Microsoft/TypeScriptSamples/blob/master/greeter/greeter.ts

class Greeter {
  constructor(public greeting: string) { }
  greet() {
    return "<h1>" + this.greeting + "</h1>";
  }
};

var greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.greet();
