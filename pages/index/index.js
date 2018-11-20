//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    radioItems:[
      {name:'name1',id:"1",checked:true},
      {name:'name2',id:"2",checked:false}

    ],

    checkItems: [
      { name: 'nameC1', id: "1", checked: false },
      { name: 'nameC2', id: "2", checked: true },
      { name: 'nameC3', id: "3", checked: true }

    ]

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onPullDownRefresh : function(){
    console.log('onPullDownRefresh ')
  },
  onClick : function(){
    console.log('onClick ')
    wx.navigateTo({
      url:'../../test/page/testPage'
    })

  },

  onLongClick:function(){
    console.log('onLongClick ')

  }
  ,

  radioChange:function(e){
    
    let raItems = this.data.radioItems;
    for(let i=0;i<raItems.length;i++){
      raItems[i].checked = (raItems[i].id == e.detail.value);
    }


      this.setData({
        radioItems: raItems
      })
  },

  checkChanged:function(e){
    console.log("checkChanged  -->>>> ");
    console.log(e.detail);
    console.log("<----  checkChanged  ");

    let chItem = this.data.checkItems;
    let checkedChild = e.detail.value;

    
    for (let i = 0; i < chItem.length;i++){
      chItem[i].checked = false;
      // console.log("chit  " + chItem[i].id +"   "+chItem[i].id === "1");

      for (var j = 0; j< checkedChild.length;j++){
      if(chItem[i].id == checkedChild[j]){
        chItem[i].checked = true;
      }
    }
    }
  
  

    this.setData({
      checkItems: chItem
    })
  }

})
