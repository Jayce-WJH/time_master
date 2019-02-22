Page({
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '设置'
    })

    this.setData({
    	workTime: wx.getStorageSync('workTime'),
    	restTime: wx.getStorageSync('restTime')
    })
  },
  //跳转任务记录页面
  jumpTask:()=>{
    wx.navigateTo({
      url: '../logs/logs',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  jumplogs:()=>{
    wx.navigateTo({
      url: "../todo_logs/todo_logs",
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  changeWorkTime: function(e) {
  	wx.setStorage({
  		key: 'workTime',
  		data: e.detail.value
  	})
  },
  changeRestTime: function(e) {
  	wx.setStorage({
  		key: 'restTime',
  		data: e.detail.value
  	})
  },


  
  
})
