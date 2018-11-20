// test/page/testPage.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    date: "2016-09-01",
    nums:[
      12, 34, 56, 78, 90, 1234
    ],
    curNum:12

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },

  bindDateChange:function(e){
    let mData =e.detail.value;
    let splits = mData.split("-");
    this.setData({
      date: splits[0]+"="+splits[1]+">"+splits[2]
    })
  },

  onSwitchChanged:function(e){
      console.log(e.detail);
    
  },

  bindCountryCodeChange:function(e){
    console.log(e.detail);
    let mNum = this.data.nums;
    let mCurNum = mNum[e.detail.value];

    this.setData({
      curNum: mCurNum
    })
  }
  
})