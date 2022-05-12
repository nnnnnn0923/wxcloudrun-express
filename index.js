// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.uniformMessage.send({
        "touser": event.openid,
        
        "mpTemplateMsg": {
          
          "appid": 'wx8dacd6275d97194f',
          "template_Id": 'HL5fbGpmGtRADoDMDcEzB6IzyO67s7sxE6YXUwr-5Z8',
          "url": 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html',
          "miniprogram": {
            "appid": 'wx212db439081e9ea8',
            "pagepath": 'index'
          },
          // "miniprogram": {
          //   "appid": 'wx212db439081e9ea8',
          //   "pagepath": 'pages/index/index'
          // },
          "data": {
            "thing1": {
              "value": '恭喜你购买成功！',
              "color": '#173177'
            },
            "date4": {
              "value": '2022-01-01 16:36',
              "color": '#173177'
            },
            "thing6": {
              "value": '臭袜子',
              "color": '#173177'
            },
            "thing7": {
              "value": '100双',
              "color": '#173177'
            },
            "thing8": {
              "value": '郭必晓',
              "color": '#173177'
            }
          },
         
        }
        
      })
    return result
  } catch (err) {
    return err
  }
}
