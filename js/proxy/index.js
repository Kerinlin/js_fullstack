// 小明表白的故事
// 小明 talk in js 
// js 具有强大的表现力
// js 弱类型语言 java 静态强类型语言
// js 基础类型 字符串 数字，
//  对象{}, array, function``
// Symbol
// bool 布尔值 false null 为空 undefined
// 六大基础类型 1个复杂类型

var xiaoming = {
    name: '小明',
    age: 21,
    hasGirlFriend: false,
    job: null,
    city: undefined,
    // 方法 行为
    sendFlower: function (target) {
        // 1 买花
        var flower = new Flower('满天星');

        if(typeof target.receiveFlower=='function') 
        // 如果检测到receiveFlower类型为函数,说明执行了函数
            target.receiveFlower(flower, this.name);
        else
            console.log('拿到名企前是不可能谈恋爱的');
    }
}

// 具有详述性， 最简单创造的对象
var xiaomei = {
    name: '小梅',
    room: '9栋2201',
    hometown: '九江',
    receiveFlower: function (flower, name) {
        console.log('收到' + name + '送的' + flower.type)
    },
    
    // 监听好心情
    /* 
    *   功能:提供心情监听
    *   参数:fn 类型函数
    *   在一段时间后,心情好后.执行fn()
    */
    lisenGoodMood:function (fn){
        setTimeout(function(){
            fn();
        },2000)
    /* 
        定时器:setTimeout事件要等主函数执行完成才执行,主函数执行完成后才会执行setTimeout里面的函数
    */
    //   typeof fn === 'function';
    //     fn();  
    }
}

var xiaoxue={
    name:'小雪',
    room: '9栋2201',
    receiveFlower: function (flower,name) {
        xiaomei.lisenGoodMood(function () {
            xiaomei.receiveFlower(flower, name);
        })
        // if(name=='小明'){
        //     console.log("我们在一起吧")
        // }else{

            // xiaomei.receiveFlower(flower, name);
        /* 实现了同样的收花方法, 接口interface
        小雪,小梅实现了同样的方法,实现了相同的接口,就可以互换对象 */
        }        
    // }
}
var xueba={
    sendFlower: function () {
        
    }
}

// 类大写， 对象小写
var Flower = function (type) {
    this.type = type || '玫瑰'
}

xiaoming.sendFlower(xiaoxue);