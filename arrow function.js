var f1 = function(i){ return i + 1; }  //ES5
var f2 = (i) => i + 1  //ES6


var fun1 = function(x, y) { 
    x++;
    y--;
    return x + y;
}
var fun2 = (x, y) => {x++; y--; return x+y}



/**************** this对象 *********************/
class Animal {
    constructor(){
        this.type = 'animal'
    }
    say(m){
        setTimeout(function(){
            console.log(this.type + ' say: ' + m)
        }, 1000)   //setTimeout中的this指向的是全局对象
    }
    say_update1(m){
        var self = this;
        setTimeout(function(){
            console.log(self.type + ' say ' + m)
        }, 1000)
    }
    say_update2(m){
        setTimeout(function(){
            console.log(this.type + ' say ' + m)
        }.bind(this), 1000)
    }
    say_update3(m){
        setTimeout( () => {
            console.log(this.type + ' say ' + m)
        }, 1000)
    }//使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。
}

var animal = new Animal()
animal.say('hi')
animal.say_update1('hi')
animal.say_update2('hi')
animal.say_update3('hi')