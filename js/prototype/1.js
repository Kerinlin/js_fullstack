// var obj={
//     a:1
// }
// console.log('a' in obj);
// console.log('hasOwnProperty()' in obj);

/* 原型链上是否具有属性 */
function hasPrototypeProperty(obj,name) {
  return name in obj && !obj.hasOwnProperty(name)
  /*&&左边为TRUE运行右边,反之... */
}

function Person(name) {
    this.name=name;
}

// 在js中,几乎所有函数都有一个prototype属性,像指针一样指向一个对象,属性或方法的集合
// Person.prototype.getName=function () {
//     return this.name;
// }

Person.prototype={
    getName:function () {
        return this.name; 
    },

}

// js原型式继承
function Author(name,books) {
    this.books=books;
    Person.call(this,name)
}
const author=new Author('oyc','goods');
extend(Author,Person);
Author.prototype.getBooks=function () {
    return this.books;
}

function extend(subClass,superClass) {
    var F=function () {};
    F.prototype=superClass.prototype;
    subClass.prototype=new F();
    // 失去构造函数
    subClass.prototype.constructor=subClass;
}

console.log(author.getBooks());