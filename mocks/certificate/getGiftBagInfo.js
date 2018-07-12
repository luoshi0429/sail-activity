/**
 * 获取学习礼包信息
 *
 * @url certificate/getGiftBagInfo
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      giftBagId: 1,
      courseBanner: 'http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg',
      teacher: {
        name: '教师名称',
        header: 'http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg',
        positionalTitle: '教师职称',
        profile: '教师简介'
      }
	  }
  }
}