// test/net/request/request.js
const app = getApp() 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url_front: "http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=",
    url_expand: "&bk_length=600",
    url_error: "http://fasf//fasfsaf/asfa",

    message:"Message",
    netLoading : false,
    tsMsg:"数据加载中",
    icon:"loading",

    url_test:"https://api.apiopen.top/videoCategory",


    videos:[]



  },


  onLoad: function (options){
    console.log("appGlobal  "+app.globalTestData.msg)
    if (app.globalTestData.msg){
      this.setData({
        message :app.globalTestData.msg
      })
    }
  },



  onClick: function(e) {

    let that =this;
    this.getRequestResponse(e, function(res) {
      console.log("123455");
      console.log(res);

    setTimeout(function(){
      that.setData({
        message: "Success",
        netLoading: false,
        videos: res.data.result.itemList
      });
      that.toastEnd();
    },1000)

    }, function(res) {
      console.log("1234");
      console.log(res);
      that.setData({
        message: "Fail",
        netLoading:false
      });
      that.toastEnd();
    });
  },


  toastEnd:function(){
    wx.hideLoading();

    wx.showToast({
      title: '已完成',
      icon:"success",
      duration:1500
    })
  },

  getRequestResponse: function(a, b, c) {

    if(this.data.netLoading) return;
    this.data.netLoading = true;


    this.setData({
        message:"Message",
        videos:[]
        // tsMsg:"数据加载中",
        // icon:"loading"
    })

    wx.showLoading({
      title: "数据加载中",
      icon: "loading",
  
    })


    let keyWord = 'fab';
    let appendUrl = this.data.url_front + keyWord + this.data.url_expand;

    wx.request({
      // url: appendUrl,
      // url: this.data.url_error,
      url: this.data.url_test,
      success(res) {
       
        console.log(appendUrl);
        // console.log(res);
        b(res);
      },
      fail(res) {
        
        console.log('fail');
        // console.log(res);
        c(res);

      }
    })
  },


  onItemClick:function(e){
    // let value = e.currentTarget.dataset
    // console.log(e);
    let value = e.currentTarget.dataset.mytitle;
    this.setData({
      message:value
    })
  }
})