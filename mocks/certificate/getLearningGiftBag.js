/**
 * 领取录取通知书
 *
 * @url certificate/getLearningGiftBag
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      giftBagId: '@id',
      courseBanner: "http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg",
      name: "教师名称",
      header: "http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg",
      positionalTitle: "教师职称",
      profile: "教师简介",
      courseName: '@ctitle',
      coursePrice: '999'
    }
  }
}

