/**
 * 领取录取通知书
 *
 * @url certificate/getGiftBag
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      resultCode: 1,
      counselorQrCode: "http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg",
      amount: "1000"
    }
  }
}

