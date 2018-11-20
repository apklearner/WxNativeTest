// test/page/swiper.js
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1571061593,2128306939&fm=173&app=25&f=JPEG?w=218&h=146&s=CC506A8B518806E85DB0A52303001063',
      'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2950689889,2081376816&fm=173&app=25&f=JPEG?w=218&h=146&s=5EDDA944C6F17D9E2B37D19A0300909B'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})