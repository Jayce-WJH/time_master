Page({
  data:{
    logs: [],
    flog:true
  },
   
  
  onShow: function () { 
    this.getlogs()
  },

  getlogs:function(){
    let logs = wx.getStorageSync('todo_logs')
      this.setData({
        logs: logs
      })



  },

clearToDolist:function(){

  wx.showModal({
    title: '提示',
    content: '是否清除记录，清除后不可恢复！',
    confirmColor: "#ed3f14",

    success: function (res) {
      if (res.confirm) {
        wx.clearStorageSync('todo_logs');
      } else if (res.cancel) {
      }
    },    
    complete:()=>{
      this.getlogs();
    }

  })



},

})
