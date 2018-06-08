// function Foo() {

// }
// var Boo={
//     name:'Boo'
// }
// Foo.prototype=Boo;

// var f=new Foo();
// console.log(f.__proto__===Boo);

// console.log(f.__proto__===Foo.prototype);
// // __proto__指向构造该对象的构造函数的原型
// console.log(Object.getPrototypeOf(f) === f.__proto__);

function Person(name) {
    this.name=name;
}
Person.prototype={
    constructor:Person,
    sayName:function () {
        console.log('my name is' +this.name);
        
    }
}
var p1=new Person('OYC');
console.log(p1.__proto__===Person.prototype);

