var name = '123'

while (true) {
    var name = 'abc'
    console.log(name)
    break
}

console.log(name)


var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); 