/**
 * 获取证书信息
 *
 * @url certificate/getLearningGiftBagList
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'list|6': [{
        giftBagId: '@id',
        courseName: '@ctitle(10)',
        courseBanner: '@image("162x97")'
      }],
      hasGet: 0
    }
  }
}