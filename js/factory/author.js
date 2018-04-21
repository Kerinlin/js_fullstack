function Person(name) {
    this.name=name;
}
Person.prototype.getName=function () {
    return this.name;
}


// IT工程师 继承Person
function  Coder(name,languages) {
    Person.call(this,name);/* 继承属性 */
    this.languages=languages;
}


/* 继承方法 */
/* new Person 新的对象就是Coder的原型对象 */
Coder.prototype=new Person();

Coder.prototype.constructor=Coder;

Coder.prototype.getInfo=function () {
    console.log(this.name+" "+this.languages);
}

var wxf=new Person("汪西发");
console.log(wxf.name);

var xjy=new Coder('徐加元',['JS','C','Python']);
xjy.getInfo();

