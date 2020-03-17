/*
 * @Descripttion: 
 * @version: 
 * @Author: by1773
 * @Date: 2020-03-17 09:19:03
 * @LastEditors: by1773
 * @LastEditTime: 2020-03-17 13:24:03
 */
var Koa = require('koa')
var wechat = require('./control/middleware.js')
const reply = require('./wechat/reply.js')
const { initSchemas, connect } = require('./app/database/init.js')

var config = {
    db: 'mongodb://localhost:27017/wechat',
    wechat: {
        appID: 'wx1d434376a642eab5',
        appSecret: '0abd15c765877c616a6d69fcd7ce0105',
        Token: 'walkerLee1773'
    }
}


;
(async() => {
    await connect(config.db)
    initSchemas()
        //     // 测试token存储
        // const { test } = require('./wechat/index.js')
        // await test()
    var app = new Koa()

    app.use(wechat(config.wechat, reply))

    app.listen(3000)
    console.log('Listening:3000')
})()