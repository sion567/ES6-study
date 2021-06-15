//ES5
function animal(type){
    type = type || 'cat'  
    console.log(type)
}
animal()


//ES6
function animal(type = 'cat'){
    console.log(type)
}
animal()