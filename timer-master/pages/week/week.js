Page({
	data: {
		week: []
	},

  onLoad() {
   
		let week = wx.getStorageSync('week') !== undefined 
			? JSON.parse(wx.getStorageSync('week'))
			: []

		let w = []

		week.forEach(i => {
      let k = JSON.parse(i);
      w.push(k);
		})

		console.log(w)
    
		this.setData({
			week:w
		})
	}
})