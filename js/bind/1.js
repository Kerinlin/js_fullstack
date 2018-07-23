// Function.prototype.bind2=function (context,...args) {
//   var args = Array.prototype.slice.call(arguments, 1)
//   var that = this;
//   return function () {
//     const bindArgs=Array.prototype.slice.call(arguments);
//     that.apply(this instanceof that ? this:context,args.concat(bindArgs))
//   }

//   // return ()=>{
//   //   this.apply(context,args)
//   // }
// }
Function.prototype.bind2 = function (context){
  var self=this;
  var args=Array.prototype.slice.call(arguments,1)
  var fNOP=function () {

  }
  var bound=function () {
    var bindArgs=Array.prototype.slice.call(arguments);
    self.apply(this instanceof self ? this : context, args.concat(bindArgs))
  }
  fNOP.prototype=this.prototype;
  bound.prototype=new fNOP();
  return bound;
}

var value=2;
var foo={
  value:1
}
function bar(name,age){
  // console.log(this.value);
  // console.log(name);
  // console.log(age);  
  this.habit='shopping';
  // console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.friend='kevin';
var bindFoo=bar.bind2(foo,'daisy')
var obj = new bindFoo('18');

console.log(obj.habit);
console.log(obj.friend);
// bindFoo()
// const bar2=bar.bind2(foo,'disp',23)
// bar2()
















// bind?
// 1.会返回一个新的函数，高阶函数 return function(){}
// 2.this指向