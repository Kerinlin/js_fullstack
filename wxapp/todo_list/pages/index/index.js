//index.js
//获取应用实例
const app = getApp()

Page({
  // 数据会对应着界面状态
  data: {
    // 默认的status是1 全部
    // setData 2 未完成
    // setData 3 已完成
    status: 1,
    addShow:true,
    lists: [{
      title: '帮徐加元同学砍价',
      time: '十分钟前',
      status: '1'
    },
    {
      title: '邀请柔柔同学看电影',
      time: '刚刚',
      status: '0'
    }],
    curList:[],
    addText:'',
    key:true
  },
  showStatus:function (e) {
    // 区分  
    const status = e.currentTarget.dataset.status;
    // console.log(e,status);
    console.log(e);
    // 不再是DOM 编程 ，针对界面状态的编程.
    this.setData({
      status: status
    })
  },
  addTodoShow:function (e) {
    this.setData({
      addShow:false
    })
    
    
  },
  setInput:function (e) {
    // console.log(e.detail.value);
    this.setData({
      addText:e.detail.value
    })
  },
  addTodo:function (e) {
    // 加的是对象自变量
    //输入框的内容
    const task = {
      title:this.data.addText,
      date:'刚刚',
      status:'0'
    }
    //...this.data.lists代表原来的lists数组，task代表新的要添加的
    const temp = [...this.data.lists,task]
    
    // ?如何添加新的todo?
    // 添加后结果：页面多一条任务
    // 显示多少条是由list 决定的
    // lists push
    // 数据驱动界面，数据变，界面自动更新。
    // MVVM Model（数据模型 data） View VM（视图模型层）

    this.setData({
      lists:temp,
      addShow:true
    })
    // 看到界面就知道要的数据，看到交互就知道对数据操作。
  },
  changeTodo:function (e) {
    // 当前点击条目的status 变为sucess ====数据lists 跟当前条目相关的这一条数据
    // 将status的值更新为1
    // ？index
    const index = e.currentTarget.dataset.item;
    const temp = this.data.lists;
    // console.log(e);
    
    temp.forEach((item,i) => {
      // console.log(item,index);
      if (i == index) {
        if (item.status == '0') {
          item.status = '1';
          wx.showToast({
            title:'已完成任务',
            icon:'success',
            duration:1000
          })
        }else {
          item.status = '0'
          wx.showToast({
            title: '任务打回重做',
            icon: 'circle',
            duration: 1000
          })
        }
      }
    })
    this.setData({
      lists:temp
    })
  },
  addTodoHide:function (e) {
    this.setData({
      addShow: true
    })

  },
  drawStart: function (e) {
    // console.log("drawStart");  
    var touch = e.touches[0];
    var startX = touch.clientX;
    console.log("x坐标"+startX);
    
    var startY = touch.clientY;
    console.log("y坐标" + startY);
    var lists = this.data.lists;
    for (let i in lists) {
      var data = lists[i];
      data.startRight = data.right;
    }
    var key=true;
  },
  drawEnd: function (e) {
    console.log("drawEnd");
    var lists = this.data.lists;
    for (var i in lists) {
      var data = lists[i];
      if (data.right <= 100 / 2) {
        data.right = 0;
      } else {
        data.right = maxRight;
      }
    }
    this.setData({
      lists: lists
    });
  },
  drawMove: function (e) {
    //console.log("drawMove");  
    var self = this;
    var dataId = e.currentTarget.id;
    var lists = this.data.lists;
    if (key=='true') {
      var touch = e.touches[0];
      var endX = touch.clientX;
      var endY = touch.clientY;
      console.log("startX=" + startX + " endX=" + endX);
      if (endX - startX == 0)
        return;
      var res = lists;
      //从右往左  

      if ((endX - startX) < 0) {
        for (var k in res) {
          var data = res[k];
          if (res[k].id == dataId) {
            var startRight = res[k].startRight;
            var change = startX - endX;
            startRight += change;
            if (startRight > maxRight)
              startRight = maxRight;
            res[k].right = startRight;
          }
        }
      } else {//从左往右  
        for (var k in res) {
          var data = res[k];
          if (res[k].id == dataId) {
            var startRight = res[k].startRight;
            var change = endX - startX;
            startRight -= change;
            if (startRight < 0)
              startRight = 0;
            res[k].right = startRight;
          }
        }
      }
      self.setData({
        lists: lists
      });

    }
  },
  //删除item  
  delItem: function (e) {
    var dataId = e.target.dataset.id;
    console.log("删除" + dataId);
    var lists = this.data.lists;
    var newlists = [];
    for (var i in lists) {
      var item = lists[i];
      if (item.id != dataId) {
        newlists.push(item);
      }
    }
    this.setData({
      lists: newlists
    });
  },
  onLoad: function () {
    console.log('onLoad:' + app.globalData.domain)

  } 
  
})
