//从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）


//ES5
let cat = 'ken'
let dog = 'lili'
let zoo = {cat: cat, dog: dog}
console.log(zoo)



//ES6
let cat = 'ken'
let dog = 'lili'
let zoo = {cat, dog}
console.log(zoo)


let dog = {type: 'animal', many: 2}
let { type, many} = dog
console.log(type, many)