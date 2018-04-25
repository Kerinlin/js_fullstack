// 图书馆
function Book(isbn,title,author) {
    this._setIsbn(isbn);
    this.title=title ||'未给标题';
    this.author=author||'未给作者';

}
Book.prototype.setIsbn = function (isbn) {
    if (this._checkIsbn()){
        this.isbn=isbn;
        console.log('success');
    }else {
        throw new Error('isbn有误');
    }
}

Book.prototype.borrow=function () {
    
}
Book.prototype._checkIsbn=function (isbn) {
    return /[0-9]{10}/.test(isbn);    
}
Book.prototype.getTitle=function () {
    return this.title;
}
Book.prototype.getAuthor = function () {
    return this.Author;
}
var book=new Book('1212121212','三国演义','罗贯中');
book.setIsbn();