/**
 * author oyc
 * date 5-1
 * 功能:就地编辑
 * 参数:@id @parent 挂载的元素
 * @ value 初始值
 */
/* 
    不再是面向业务的流程编程
    一上来,就封装一个类,这是个美好的愿望,可以以后多复用
*/
function EditInPlace(id, parent, value) {
    this.id = id;
    this.parentElement = parent; //需要挂载的父元素 root
    this.value = value || 'default value';

    this.createElement();//创建html结构,挂载dom

    this.attachEvent();//监听事件,处理输入文字后的事件
}

EditInPlace.prototype = {
    createElement: function () {
        //在盒子root内添加一个div
        this.containerElement = document.createElement('div');

        //显示静态文字
        this.staticElement = document.createElement('span');
        this.containerElement.appendChild(this.staticElement);
        this.staticElement.innerHTML = this.value;

        //添加点击后的输入框
        this.fieldElement = document.createElement('input');
        this.fieldElement.type = 'text';
        this.fieldElement.value = this.value;
        this.containerElement.appendChild(this.fieldElement);

        //将所有内容挂载到父元素中
        this.parentElement.appendChild(this.containerElement);

        this.convertToText();
    },

    //显示内容,隐藏输入框,不能编辑文字
    convertToText: function () {
        this.staticElement.style.display = 'inline';
        this.fieldElement.style.display = 'none';
    },

    //显示输入框,隐藏静态文本
    convertToEdit: function () {
        this.staticElement.style.display = 'none';
        this.fieldElement.style.display = 'inline';
        this.fieldElement.focus();
        this.fieldElement.value=' ';
    },

    attachEvent: function () {
        // console.log(this);
        var that = this; //改变this指向
        this.staticElement.addEventListener('click', function () {
            /*  console.log(this);  <span style="display: inline;">未命名</span> */
            //函数被执行时,并不是对象的方法,而是匿名函数,作为事件处理函数来执行,this指向事件发生元素
            that.convertToEdit();
        }, false);
        this.fieldElement.addEventListener('keydown', function (evt) {          
            //按下enter键后的事件,将文本转换为静态文字显示在页面,打印值到控制台
            if (evt.keyCode == 13) {
                console.log(evt);
                that.staticElement.innerHTML = this.value;
                console.log(this.value);
                that.convertToText();
            }
        }, false)
    }
}

/* 小结:
        对象内部的this,指向对象原型链上的方法和属性;
        对象的方法被执行时,this指向对象
        this的指向跟函数调用方式有关
*/
