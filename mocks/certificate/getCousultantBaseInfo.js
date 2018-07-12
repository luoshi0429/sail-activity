/**
 * 获取咨询师微信号
 *
 * @url certificate/getCousultantBaseInfo
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      counselorWechatNum: 'counselorWechatNum',
      nickName: '@name',
      headImg: '@image("100x100")'
    }
  }
}