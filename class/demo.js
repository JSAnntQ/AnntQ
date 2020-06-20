class Animate {
    constructor({name,syaType}){
        this.name = name
        this.syaType = syaType
        this.sayNo = ()=>{
            return this.sayHello()
        }
    }
    say(){
        console.log(this.syaType);
    }
    sayName(){
        console.log(this.name);
        
    }
}

let dog = new Animate({name: 'dog',syaType: 'wang'})

dog.say()
dog.sayName()

console.log(Animate);



class Cat extends Animate {
    constructor(data){
        super(data)
        this.sayNo = ()=>{
            return this.sayHello()
        }
    }
    sayHello(){
        console.log('hello');
        
    }
}

let catDe = new Cat({name:'cat',syaType:'miao'})
catDe.say()
catDe.sayName()
catDe.sayHello()
// dog.sayHello()

console.log(catDe.sayNo());
console.log(Cat.prototype);
console.log(catDe.prototype);

var a = 1;
(function(){
    console.log(a)
})()
