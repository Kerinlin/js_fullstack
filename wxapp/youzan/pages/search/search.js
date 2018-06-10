import jobList from '../../api/detail'
Page({
  data: {
    confirm: '取消',
    width: '',
    isConfirm: '',
    inputValue: '',
    sercherStorage: [],
    isShow: false,
    isHide: false,
    isCover: true,
    result: []
  },
  onLoad: function (options) {
    const inputValue = options.inputValue;
    if (wx.getStorageSync('searchData') == '') {
      this.setData({
        isHide: true,
        isCover: true,
      })
    } else {
      this.setData({
        inputValue: inputValue,
        confirm: '完成',
        sercherStorage: wx.getStorageSync('searchData') || [],
        isHide: false,
        isShow: true
      })
    }  
  },
  changeValue(e) {
    let inputValue = e.detail.value;
    if (inputValue == '') {
      this.setData({
        confirm: '取消',
        isConfirm: false,
        isHide:false,
        width: '85%',
        isShow: true,
        isCover:true
      })
    } else {
      this.setData({
        confirm: '完成',
        inputValue: inputValue
      })
    }
  },
  confirmValue(e) {
    let value = this.data.inputValue;
    if (this.data.confirm === '完成') {
      let result = [];
      let job = jobList
      for (let i in job) {
        if (job[i].jobName.indexOf(value) >= 0){
          result.push(job[i]);
          this.setData({
            result
          })
        }
        if(this.data.result.length == 0) {      
          wx.showToast({
            title: '未找到数据',
          });
          this.setData({
            isConfirm: false,
            isHide: false
          })
        }
      }
         
      // let result=[];
      // let reg=new RegExp(value);
      // for(var i=0;i<jobList.length;i++){
      //   if(jobList[i].jobName.match(reg)){
      //     result.push(jobList[i]);
      //     this.setData({
      //       result
      //     })
      //   }
      // }

      this.setData({
        isConfirm: true,
        width: '95%',
        inputValue: value,
        isHide: true,
        isShow: false,
        isCover: false
      })
      let searchData = this.data.sercherStorage;
      searchData.push({
        id: searchData.length,
        name: value
      })
      wx.setStorageSync('searchData', searchData);
    } else {
      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      })
    }

  },
  clearStorage(e) {
    wx.clearStorageSync('searchData');
    wx.showModal({
      title: '提示',
      content: '确定删除全部历史记录？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            sercherStorage: [],
            isShow: false
          })
        } else if (res.cancel) {
          return false;
        }
      }
    })
  },

})