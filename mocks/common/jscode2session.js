/**
 * 微信Code换取session_key
 * @url common/jscode2session
 */
module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      result: {
        openid: 'openId',
        session_key: 'sessionKEy',
        unionid: 'unionid'
      }
    }
  }
}
