/*
 * @Descripttion: 
 * @version: 
 * @Author: by1773
 * @Date: 2020-03-17 09:19:03
 * @LastEditors: by1773
 * @LastEditTime: 2020-03-17 14:26:16
 */
const WeChat = require('../control/index.js')
const mongoose = require('mongoose')

const Token = mongoose.model('Token')


const wechatCfg = {
    wechat: {
        appID: 'wx1d434376a642eab5',
        appSecret: '0abd15c765877c616a6d69fcd7ce0105',
        token: 'walkerLee1773',
        getAccessToken: async() => {
            const res = await Token.getAccessToken()
            return res
        },
        saveAccessToken: async(data) => {
            const res = await Token.saveAccessToken(data)
            return res
        }
    }
}

// exports.test = async() => {
//     const client = new Wechat(wechatCfg.wechat)
//     const data = await client.fetchAccessToken()
//     console.log(data)
// }
exports.getWeChat = () => new WeChat(wechatCfg.wechat);