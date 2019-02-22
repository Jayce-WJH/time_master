//app.js
const defaultTime = { 
  //设置默认时间
  defaultWorkTime: 25,
  defaultRestTime: 5
}

App({
  onLaunch: function() {
    //获取本地缓存中的worktime和restime
    let workTime = wx.getStorageSync('workTime')
    let restTime = wx.getStorageSync('restTime')
    if (!workTime) {
      wx.setStorage({  //存储到本地
        key: 'workTime',
        data: defaultTime.defaultWorkTime
      })
    }
    if (!restTime) {
      wx.setStorage({
        key: 'restTime',
        data: defaultTime.defaultRestTime
      })
    }
  }
})
