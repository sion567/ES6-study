let name = '123'

while (true) {
    let name = 'abc'
    console.log(name)
    break
}

console.log(name) 


var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6]();