// Publish    多个Subscriber   pub-sub



let zk={};  //发布者


zk.peopleList=[]; //订阅者

zk.listen=function (fn) {
    this.peopleList.push(fn);
}
zk.trigger=function() {
    for(let i=0,fn;fn=this.peopleList[i++];){
        fn.apply(this,arguments)
    }
}

/* 
apply:方法能劫持另外一个对象的方法，继承另外一个对象的属性.

Function.apply(obj,args)方法能接收两个参数

obj：这个对象将代替Function类里this对象

args：这个是数组，它将作为参数传给Function（args-->arguments）

https://www.jb51.net/article/105813.htm
*/

// 订阅者的过程
zk.listen(function (msg) {
   console.log(`收到了你${msg}的信息，决定给红包`);
});
zk.listen(function (msg) {
    console.log(`收到了你${msg}的信息，打飞机来`);
});
zk.listen(function (msg) {
    console.log(`收到了你${msg}的信息，作为情敌表示不开心`);
});
zk.trigger('曾凯同学要结婚了');
zk.trigger('曾凯同学要生了');
zk.trigger('曾凯同学生二胎了');
zk.trigger('曾凯同学超生罚款了');
