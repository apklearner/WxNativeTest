// pages/enter/enter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: ["../index/index", "../../test/page/swiper", "../../test/page/testPage", "../../test/net/request/request", "../../test/web/webpage", "../../test/mul/mulpage","../../test/new/useComponentPage"],
    txts:["index","swiper","testPage","request","webpage","mulpage","useComponent"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onItemClick:function(e){
    let msg = e.currentTarget.dataset.msg;

  console.log(msg);

  
    for(let i =0;i<this.data.txts.length;i++){
      if(msg == this.data.txts[i]){
            wx.navigateTo({
              url: msg == "webpage" ? this.data.pages[i] +"?link=http://www.baidu.com":this.data.pages[i] +"?msg=这是传递的参数",
            })
      }
    }

  }
})