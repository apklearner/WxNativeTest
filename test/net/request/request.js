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

    message: "Message",
    netLoading: false,
    tsMsg: "数据加载中",
    icon: "loading",

    url_test: "https://www.apiopen.top/journalismApi",


    videos: [],
    wh: 800



  },


  onLoad: function(options) {
    console.log("appGlobal  " + app.globalTestData.msg)
    if (app.globalTestData.msg) {
      this.setData({
        message: app.globalTestData.msg
      })
    }

    let that = this;

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          wh: res.windowHeight
        })
      },
    })
  },



  onClick: function(e) {

    this.setData({
      message: "Message",
      videos: []
      // tsMsg:"数据加载中",
      // icon:"loading"
    })
    this.getSimpleRequsest(e);

  },



  getSimpleRequsest: function(e) {
    let that = this;
    this.getRequestResponse(e, function(res) {
      console.log("123455");
      console.log(res);

      let mVideos = that.data.videos;
      // console.log(mVideos);

      let randomValue = parseInt(Math.random() * 8);

      switch (randomValue) {
        case 0:
          mVideos = mVideos.concat(res.data.data.auto);
          break
        case 1:
          mVideos = mVideos.concat(res.data.data.dy);
          break;
        case 2:
          mVideos = mVideos.concat(res.data.data.ent);
          break
        case 3:
          mVideos = mVideos.concat(res.data.data.money);
          break;
        case 4:
          mVideos = mVideos.concat(res.data.data.sports);
          break
        case 5:
          mVideos = mVideos.concat(res.data.data.tech);
          break;
        case 6:
          mVideos = mVideos.concat(res.data.data.toutiao);
          break
        case 7:
          mVideos = mVideos.concat(res.data.data.war);
          break;
      
      }

      // mVideos = mVideos.concat(res.data.data.tech);
      // console.log(res.data.result.itemList);

      console.log("mvideo");
      console.log(mVideos);

      setTimeout(function() {
        that.setData({
          message: "Success",
          netLoading: false,
          videos: mVideos
        });
        that.toastEnd();
      }, 1000)

    }, function(res) {
      console.log("1234");
      console.log(res);
      that.setData({
        message: "Fail",
        netLoading: false
      });
      that.toastEnd();
    });
  },


  toastEnd: function() {
    wx.hideLoading();

    wx.showToast({
      title: '已完成',
      icon: "success",
      duration: 1500
    })
  },

  getRequestResponse: function(a, b, c) {


    if (this.data.netLoading) return;
    this.data.netLoading = true;


    // this.setData({
    //     message:"Message",
    //     videos:[]
    //     // tsMsg:"数据加载中",
    //     // icon:"loading"
    // })

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

        // console.log(appendUrl);
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


  onItemClick: function(e) {
    // let value = e.currentTarget.dataset
    console.log(e);
    let value = e.currentTarget.dataset.mytitle;
    let icon = e.currentTarget.dataset.myicon;
    
    let link = e.currentTarget.dataset.mylink;

    this.setData({
      message: value
    })
    wx.showToast({
      title: value,
      icon: "fail",
      duration: 1500,
    });

    setTimeout(function() {

      let random = parseInt(Math.random() * 3);
      // let page = random == 1 ? "../../page/testPage" : "../../../pages/index/index";
      // page = page +"?msg=我是从其他页面带来的参数";

    let page = "../../web/webpage" +"?link="+link;

      wx.navigateTo({
        url: page
      })
    }, 200)

    // for(var i =0;i<20;i++){
    //   // console.log(Math.random() * 3);
    //   console.log(parseInt(Math.random() * 2));
    // }

  },

  reachBottom: function(e) {
    console.log("reached bottom");

    // if (this.data.netLoading) return;
    // this.data.netLoading = true;

    this.getSimpleRequsest(e);

  }


})