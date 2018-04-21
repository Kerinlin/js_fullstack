/*  console.log('工厂模式');

函数属于 对象 
函数是一等对象
类,简单的只有一个构造函数,类跟函数没有区别
js本身并没有类,只是用的人多了,给了这个实现
js里其实只有对象 Object原型对象的使用
原型 prototype
js不需要传统的继承,只要有个参照物就可实现原型式继承
*/

var Bicycle = function (brand) {
    /* 构造函数 constructor
    new执行 */
    this.brand = brand || '凤凰';

}
/* 
原型 凤凰....

多了二维码,手机支付

js 继承关系

共享单车完全颠覆了自行车

*/
Bicycle.prototype = {
  

    sellBicycle: function (model) {
        /* console.log("卖车了");
        return null; */
        /*面向对象们
        卖车,商店,很多车,维修人员,仓库人员 
               
        */
        var bicycle = null;
        switch (model) {
            case 'Giant':
                bicycle = new Giant();
                break;
            case 'Speedster':
                bicycle = new Speedster();
                break;
            case 'Yua':
                bicycle = new Yua();
                break;
        }
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepair();
        return bicycle;
    }
}
/* 
    js基础类型:字符串,数字,布尔值,undefined,null
    复杂数据类型:object  <--prototype array function json
*/


// 雷速达
function Speedster() {
    
}


Speedster.prototype = {
    wash: function () {
        console.log('清洗了');
    },
    assemble: function () {
        console.log('组装了');
    },
    provideRepair: function () {
        console.log('维修1年');
    }

}

function Yua() {

}

Yua.prototype = {
    wash: function () {
        console.log('清洗了');
    },
    assemble: function () {
        console.log('组装了');
    },
    provideRepair: function () {
        console.log('维修2年');
    }
}

function Giant() {

}

Giant.prototype = {
    wash: function () {
        console.log('清洗了');
    },
    assemble: function () {
        console.log('组装了');
    },
    provideRepair: function () {
        console.log('维修3年');
    }
}

var bicycle = new Bicycle();
console.log(bicycle.sellBicycle('Yua'));