// test/web/webpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      link:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.showLoading({
        title: '正在加载',
      })
      if(options.link){
        this.setData({
          link:options.link
        })
      }else{
        wx.hideLoading();
      }
  },


//这两个方法没效果
  onPageFinish:function(e){
    // wx.hideLoading();
    console.log("onPageFinish");
  },

  onPageError:function(e){
    // wx.hideLoading();
    console.log("onPageError");
  }

})