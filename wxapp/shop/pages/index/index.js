//index.js
//获取应用实例
import goods from '../../api/goods.js'
const app = getApp()

Page({
  data: {
    num: 1,
    show: false,
    totalNum: 0,
    scaleCart: false,
    goods: null,
    content:'这里是梨花带雨详情',
    status:0,
  },
  addCount() {

    let num = ++this.data.num;
    this.setData({
      num
    })
  },
  addToCart() {
    const num = this.data.num;
    const total = this.data.totalNum;
    this.setData({
      show: true
    });
    setTimeout(() => {
      this.setData({
        show: false,
        scaleCart: true
      })
      setTimeout(() => {
        this.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total,
        })
      }, 200);
    }, 300);
  },
  onLoad(options) {
    let id = options.id || 2;
    let curGoods;
    for (let i = 0; i < goods.length; i++) {
      if (goods[i].id === id) {
        curGoods = goods[i];
        break;
      }
    }
    setTimeout(() => {
      this.setData({
        goods: curGoods,
      })
    }, 1000);
  },
  showContent(e) {
    console.log(e);
    
    let status = e.target.dataset.index;
    let id=e.target.id;
    let cur=this.data.goods;
    switch (status) {
      case "0":
        this.setData({
          content: cur.detail,
          status:status
        })
        break;
      case "1":
        this.setData({
          content: cur.parameter,
          status: status
        })
        break;       
      case "2":
        this.setData({
          content: cur.service,
          status: status
        })
    }
  },


})
