//index.js
//获取应用实例
const app = getApp()

Page({
  /* 数据 对应着 界面状态 */
  data: {
    /* 默认的status是1 */
    // setData  可以改变
    status: 1,
    addShow:true,
    list:[{
      title:'a113123124',
      status: '1',
      time: '刚刚'
    }
    ],
    addText:'',
    id:'0'
  },
  curLists:[],
  showStatus:function (e) {
    const status=e.currentTarget.dataset.status;
    const lists=this.data.list;
    const newList=[...lists];
    const newList3=[...lists];
    console.log(e);
    console.log(lists.length);
    for (let i=0;i<lists.length;i++){
    if(status=='1'){
      this.setData({
        list: lists,  
      })  
    }else if(status == '2' && newList[i].status == '0'){
      const neverDoneList= newList.splice(i, 1, '');
        this.setData({
          list: neverDoneList,
          status:status,
        })
        console.log(neverDoneList);      
    } else if (status == '3' && newList3[i].status == '1'){
      const haveDoneList= newList3.splice(i,1,'')
      this.setData({
        list: haveDoneList,
        status:status
      })
    }
}
    // for (let i = 0; i <= lists.length; i++) {
    //    {
    //     curLists.splice(i, 1);
    //     this.setData({
    //       list:curLists,
    //       status:2
    //     })
    //   } else if (status == '1'){
    //     this.setData({
    //       list:lists,
    //     })
    //   }
    // } 
    /* 不再是DOM编程,针对界面状态的编程 */
    this.setData({
      status:status
    })
  },
  addTodoShow:function (e) {
    this.setData({
      addShow: false
    })
  },
 
  addTodo:function (e) {
   /* 添加任务 显示多少由list决定的 list push  M(数据模型) View  VM(视图模型层) */
   const task={
     title:this.data.addText,
     status:'0',
     time:'刚刚'
   }
   const temp=[...this.data.list,task];
   this.setData({
     list:temp,
     addShow:true
   })
  },   
  
  addTodoHide:function (e) {
    this.setData({
      addShow:true
    })
  },
  setInput:function (e) {
    // console.log(e.detail.value);
    this.setData({
      addText:e.detail.value,
    })
  },
  changeTodo:function (e) {
    /* 改变status */
    const index=e.currentTarget.dataset.item;
    const temp = this.data.list;
    temp.forEach((item,i) => {
      console.log(item,i);
      if(i==index){
        if(item.status=='0'){
          item.status='1';
          wx.showToast({
            title:'已完成任务',
            icon:'success',
            duration:1000
          })
        }else{
          item.status='0';
          wx.showToast({
            title: '任务打回重做',
            icon: 'success',
            duration: 1000
          })
        }
      }
      this.setData({
        list: temp,
      })
    });
  },
    
})
