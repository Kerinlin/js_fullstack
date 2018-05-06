//index.js
//获取应用实例
const app = getApp()

// 数据绑定
Page({
  data: {
    latitude:39.914769,
    longitude:116.404556,
    scale:15,
    controls:[],
  },
    onReady:function () {
      console.log('ready');
      
      // 小程序提供了获取经纬度的方法
      wx.getLocation({
        type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: (res)=>{
          console.log(res.latitude,res.longitude);
          // 重新设置Data 里的数据
          this.setData({
            latitude:res.latitude,
            longitude:res.longitude,
            scale:18
          })       
        }
      })
      this.setData({
        controls: [{
          id: 1,
          iconPath: '/images/location.png',
          position: {
            left: 20,
            top: 200,
            width: 50,
            height: 50
          }
        }]
      })
    },
    
    // page先显示地图,晚一点显示controls
    
    onLoad:function () {
      console.log('load');
      
    }
    })