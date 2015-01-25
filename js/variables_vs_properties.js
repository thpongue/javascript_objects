function Something() {
  var bar = "lala";
  this.baz=function() {
    return bar;
  }
  this.qux=function() {
    return this.bar;
  }
}

var foo = new Something();
foo.bar = "doodoo";

console.log(foo.bar);
console.log(foo.baz());
console.log(foo.qux())
