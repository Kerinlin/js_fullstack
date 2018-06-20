// var s1=Symbol('foo');
// var s2 = Symbol('bar');
// console.log( s1==s2);
// var s3='123';
// var s4=new String('123');
// console.log(s3===String(s4) );
// var sym=Symbol('my symbol');
// console.log(String(sym));

// console.log(sym == String(sym));
var mySymbol=Symbol();
var a={
    "delay":1000,
    "delay":2000,
    [mySymbol]:'hello'
}
// var sym = Symbol();
// a[sym]={value:'你好'};
// console.log(a);
// object.defineProperty(a, mySymbol,
//     { value: '你好' }
// )
// for(key in a){
//     console.log(key,a[key]);
// }
// console.log(a[mySymbol]);



// const objectSymbols=Object.getOwnPropertySymbols(a);
// console.log(objectSymbols);
var obj=new Object();
const sym=Symbol();
Object.defineProperty(obj,sym,{
    configurable:false,
    writable:true,
    enumerable:true,
    value:'oyc'
})
console.log(obj[sym]);



