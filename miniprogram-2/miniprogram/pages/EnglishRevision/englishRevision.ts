// pages/EnglishRevision/englishRevision.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input:"I is worked hard",
    revisionData:undefined,
    autosizeData:{  minHeight: 100 }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  changeWords(e){

    this.setData({input:e.detail})

  },
  revision(){
    let that =this;
    wx.request({
    url:"https://api.coze.cn/v1/workflow/run",
    header:{
      Authorization: "Bearer pat_XdZhO4EBIfE6ml2ehxMJbNi5bbtHK0lMsxQ96VjuyyaYf3d6TXnZBNbOzNDrvZ3Q"
    },
    data:{
      workflow_id:"7484079385898614834",
      parameters:{
        input:that.data.input
      },
    },
    method:"POST",
    success(res){
      let translateStr = res.data.data;
      let revisionData = JSON.parse(translateStr);
      console.log(revisionData,'revisionData')
      that.setData({revisionData})

    },
    complete(){
      that.setData({isLoading:false})
      wx.hideLoading()
    }
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})