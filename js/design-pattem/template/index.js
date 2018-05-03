/* 泡一杯咖啡 talk in js

流程:
    1.煮沸水   
    boilWater();

    2.水冲咖啡
    brewCoffeeGriends()

    3.咖啡进杯
    pourInCup()


    4.加糖和牛奶
    addSugarAndMilk();

*/
// var Coffee = function () {

// }


// Coffee.prototype.boilWater = function () {
//     console.log('煮沸水');

// }

// Coffee.prototype.brewCoffeeGriends = function () {
//     console.log('水冲咖啡');
// }

// Coffee.prototype.pourInCup = function () {
//     console.log('咖啡进杯');
// }

// Coffee.prototype.addSugarAndMilk = function () {
//     console.log('加糖和牛奶');
// }

// Coffee.prototype.init=function () {
//     this.boilWater();
//     this.brewCoffeeGriends();
//     this.pourInCup();
//     this.addSugarAndMilk();
// }

// /* 
//     泡茶:
//         1.煮沸水
//         2.沸水泡茶
//         3.倒进杯子
//         4.加柠檬
// */
// var Tea = function () {

// }


// Tea.prototype.boilWater = function () {
//     console.log('煮沸水');

// }

// Tea.prototype.brewTeaGriends = function () {
//     console.log('水泡茶');
// }

// Tea.prototype.pourInCup = function () {
//     console.log('茶进杯');
// }

// Tea.prototype.addLemon = function () {
//     console.log('加柠檬');
// }

// Tea.prototype.init = function () {
//     this.boilWater();
//     this.brewTeaGriends();
//     this.pourInCup();
//     this.addLemon();
// }

// var coffee = new Coffee();
// var tea = new Tea();


/* 
    复用方法?
    父类,兄弟类
    抽象出饮料类:drink (抽象类)=>一切都抽象
    共同点:
    1.boilWater,
    2.泡某个饮品=>brew()?
    3.倒进杯子 pourInCup
    4.添加辅料==>addCondiments

*/


// 抽象类,模板模式
/*function Beverage() {

}

Beverage.prototype.boilWater = function () {
    console.log('煮沸水');
}
Beverage.prototype.brew = function () { }
Beverage.prototype.pourInCup = function () { }
Beverage.prototype.addComdiments = function () { }
Beverage.prototype.init = function () {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addComdiments();
}

var Coffee = function () {}
    Coffee.prototype = new Beverage();
    Coffee.prototype.brew = function () {
        console.log('水冲咖啡');
    }
    Coffee.prototype.pourInCup = function () {
        console.log('咖啡进杯');
    }
    Coffee.prototype.addComdiments = function () {
        console.log('加糖和牛奶');
    }



var Tea = function () {}
    Tea.prototype = new Beverage();
    // 覆盖父类方法 brew interface(接口)
    Tea.prototype.brew = function () {
        console.log('水泡茶');
    }
    Tea.prototype.pourInCup = function () {
        console.log('茶进杯');
    }
    Tea.prototype.addComdiments= function () {
        console.log('加柠檬');
    }

var coffee = new Coffee();
coffee.init();

var tea = new Tea();
tea.init();
*/


/* js way 模板模式

模板?
    大体结构确定, ,4步,动作概念都有
    差异点?==> 继承抽象解决
    js可以更优雅,参数问题



*/
var Beverage=function(param) {
    var boilWater=function () {
        console.log('煮沸水');       
    }
    var brew=param.brew||function () {
        throw new Error('必须传brew方法');
    }
    var pourInCup = param.pourInCup||function () {
        throw new Error('必须传pourInCup方法')
    }
    var addComdiments = param.addComdiments||function () {
        throw new Error('必须传addComdiments方法')
    }
    /* 
    1.通过 (param.方法名称) ,将外部的方法传入Beverage函数作用域内,
    2.再将方法通过函数表达式存储在Beverage函数作用域内,这样F就能访问外部传入的方法;
      
    */
   
   
    var F=function(){};//构造函数模板

    F.prototype.init=function () {
        boilWater();
        brew();
        pourInCup();
        addComdiments();
    }
    return F;//返回构造函数

    /* 
        为什么这样做?  
        可以通过外部的函数表达式,套用函数体内的函数模板,达到重复使用的效果,而且精简了代码;  
    */
}

var Coffee=Beverage({
    brew:function () {
        console.log('水冲咖啡');
    },
    pourInCup:function () {
        console.log('咖啡进杯');  
    },
    addComdiments:function () {
        console.log('加糖和牛奶');
    }
});

/* 
    1.通过Beverage,构造了Coffee构造函数,并且向Beverage传入了方法,
    2.Berverage相当于是一个中介,使者,将Coffee跟他的方法结合起来了.
*/

var coffee = new Coffee();
coffee.init();
