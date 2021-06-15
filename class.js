class Animal {
    constructor(){
        this.type = 'どうぶつ'
    }
    say(msg){
        console.log(this.type + ' say: ' + msg)
    }
}

let animal = new Animal()
animal.say('hello')

class Cat extends Animal {
    constructor(){
        super()
        this.type = 'ねこ'
    }
}

let cat = new Cat()
cat.say('miao~')