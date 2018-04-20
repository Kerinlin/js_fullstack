// console.log("合唱团");
// talk is js
// 国王,招1000只鸭组成合唱团

var choir=[];
// duck是一个鸭对象
// JSON object
// 只要两脚站立会嘎嘎嘎的叫都是鸭子
// choir.push(duck);
var duck ={
    name:'鸭王',
    actor:'任达华',
    ducksinging:function () {
        console.log("嘎嘎嘎");       
    }
}

// new一下,json对象,不需要new
// json 慢慢描述 也是数据交换的标准
// var oyc={
//     name:'欧阳铖',
//     hasGirlFriend:false,
//     birth:'5-04',
//     girlAttributes: {
//         sex: 'all',
//         isAlive:true
//     }
// }
// console.log(oyc.girlAttributes.sex);
// oyc.girlAttributes.sex="female";
// console.log(oyc.girlAttributes.sex);

var chicken={
    ducksinging:function () {
        console.log('嘎嘎嘎');
    }
}


for(i=0;i<999;i++){
    // choir.push(duck);
    choir.push(duck);
    
}

console.log(choir.length);
// joinChoir(duck);
joinChoir(chicken);
console.log(choir.length);

for(var i=0;i<choir.length;i++){
    var singer=choir[i];
    if(!singer.ducksinging){
        console.log("不是鸭子");
        break;
    }
}
function joinChoir(ani) {
    if(ani && typeof ani.ducksinging=='function'){
        choir.push(ani);    
    }else{
        console.log("哪里来滚哪里去");
    }
}


