//es6 class只是语法糖

function Person(name) {
    this.name=name  
}
Person.prototype={
    getName:function () {
        return this.name
    }
}

function Author(name,books) {
    Person.apply(this,[name]);
    this.books=books;
}
extend(Author,Person);
Author.prototype.getBooks=function () {
    return this.books;
}
function extend(subClass,supClass) {
    // var F=function () {}
    subClass.prototype=new supClass();
    subClass.prototype.constructor=subClass;//找回丢失的prototype
}
const person = new Person('周杰伦');
const author=new Author('OYC',['hhhhhh']);
console.log(author.getName());
console.log(person.getBooks());

// new Person()