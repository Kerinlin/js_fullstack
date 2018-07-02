function Otaku() {
    this.name=name;
    this.age=age;
    this.habit='Games';
}

Otaku.prototype.strength=60;
Otaku.prototype.sayYourName=function () {
    console.log('I am '+this.name);  
}
// const person=new Otaku('曾凯',18);
// person.sayYourName();


// new的过程
// 1.要返回一个otatu对象
// 2.访问到o
// 3.



// 参数1是类，后几个参数。。。。
// js的函数参数异常灵活，数量可以不定，甚至可以不给，还有... reset运算符整合起来，都会跟arguments结合起来
function objectFactor() {
    // console.log(arguments);
    // var constructor
    // shift方法 将第一个元素弹出
    //1. 
    // var Constructor = Arry.from(argunments)
    // 2. 
    var Constructor=[].shift.call(arguments);
    // console.log(Constructor);
    // var obj ={};
    var obj=new Constructor();
    obj.__proto__=Constructor.prototype;
    Constructor.apply(obj,arguments)

    //obj执行constructor中的方法，但是constructor中存在this,间接继承了Constructor
    
    
    
    // console.log(obj);
    
    // obj.__proto__=Constructor.prototype;
    // 在apply内部手动指定函数执行时的this
    // Constructor.apply(obj,arguments)
    // return obj;
    // console.log(obj);

    
    
    // let args=arr.splice(1,1);
    // console.log(args);
    
    
    
}
var person = objectFactor(Otaku, '鸠摩智', 50);
person.sayYourName();

// 函数this 由运行时决定 ，运行时的函数调用方式决定
// 
