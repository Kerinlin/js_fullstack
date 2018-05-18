//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    colorCircleFirst:'#FFDF2F',
    colorCircleSecond:'#FE4D32',
    colorAwardDefault: '#F5F0FC',//奖品默认颜色
    colorAwardSelect: '#ffe400',//奖品选中颜色
    circleList:[],
    awardList:[],
    indexSelect:0,
    isRunning:false,
    imageAward: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg',
      '../../images/4.jpg',
      '../../images/5.jpg',
      '../../images/6.jpg',
      '../../images/7.jpg',
      '../../images/8.jpg',
    ],
  },
  onLoad:function () {
    let leftCircle = 7.5;
    let topCircle = 7.5;
    let circleList = [];
    for (let i = 0; i < 24; i++) {
      if (i == 0) {
        topCircle = 15;
        leftCircle = 15;
      } else if (i < 6) {
        topCircle = 7.5;
        leftCircle = leftCircle + 102.5;
      } else if (i == 6) {
        topCircle = 15
        leftCircle = 620;
      } else if (i < 12) {
        topCircle = topCircle + 94;
        leftCircle = 620;
      } else if (i == 12) {
        topCircle = 565;
        leftCircle = 620;
      } else if (i < 18) {
        topCircle = 570;
        leftCircle = leftCircle - 102.5;
      } else if (i == 18) {
        topCircle = 565;
        leftCircle = 15;
      } else if (i < 24) {
        topCircle = topCircle - 94;
        leftCircle = 7.5;
      } else {
        return
      }
      circleList[i]={
        leftCircle,
        topCircle
      } 
    }
    setInterval(() => {
      if (this.data.colorCircleFirst == '#FFDF2F') {
        this.setData({
          colorCircleFirst: '#FE4D32',
          colorCircleSecond: '#FFDF2F'
        })
      } else {
        this.setData({
          colorCircleFirst: '#FFDF2F',
          colorCircleSecond: '#FE4D32'
        })
      }
    }, 1000);
    this.setData({
      circleList
    })
    var awardList = [];
    //间距,怎么顺眼怎么设置吧.
    var topAward = 25;
    var leftAward = 25;
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        topAward = 50;
        leftAward = 50;
      } else if (j < 3) {
        topAward = topAward;
        //166.6666是宽.15是间距.下同
        leftAward = leftAward + 166.6666 + 35;
      } else if (j < 5) {
        leftAward = leftAward;
        //150是高,15是间距,下同
        topAward = topAward + 150 + 35;
      } else if (j < 7) {
        leftAward = leftAward - 166.6666 - 35;
        topAward = topAward;
      } else if (j < 8) {
        leftAward = leftAward;
        topAward = topAward - 150 - 35;
      }
      var imageAward = this.data.imageAward[j];
      awardList.push({ topAward: topAward, leftAward: leftAward, imageAward: imageAward });
    }
    this.setData({
      awardList: awardList
    })
  },
  startGame: function () {
    let r=Math.ceil(Math.random()*10+1);
    if (this.data.isRunning) return
    this.setData({
      isRunning: true
    })
    var that = this;
    var indexSelect = 0
    var i = 0;
    var timer = setInterval(function () {
      indexSelect++;
      //这里我只是简单粗暴用y=30*x+200函数做的处理.可根据自己的需求改变转盘速度
      i += 30;
      if (i > 1000) {
        //去除循环
        clearInterval(timer)
        //获奖提示

        wx.showModal({
          title: '恭喜您',
          content: '获得了第' + (that.data.indexSelect) + "个优惠券",
          showCancel: false,//去掉取消按钮
          success: function (res) {
            if (res.confirm) {
              that.setData({
                isRunning: false
              })
            }
          }
        })
      }
      indexSelect = indexSelect % r ;
      that.setData({
        indexSelect: indexSelect
      })
    }, (100 + i))
  }
})
