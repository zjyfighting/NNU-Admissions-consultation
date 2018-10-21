//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  loginCenterIndex: function(){
    
    wx.navigateTo({
      url: '../chat/chat'
    })
  },
  onLoad: function () {
      wx.setNavigationBarTitle({
          title: '校讯先知道',
          success: function () {
              // console.log("success")
          },
          fail: function () {
              // console.log("error")
          }
      })
  }
})
