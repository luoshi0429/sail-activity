/**
 * 获取用户信息
 * @url legion8th/course/getMarketCourseList
 */

module.exports = function () {
  var now = +new Date();
  const begin = now + 1000 * 60 * 60 * 1
  const end = now + 1000 * 60 * 60 * 2

  return {
    result: 10000,
    msg: 'ok',
    data: {
      'list|5': [{
        courseId: '@id',
        courseName: '@ctitle(20)',
        courseDesc: '@ctitle(50)',
        courseBanner: '@image("600x410")',
        courseDate: now,
        beginTime: begin,
        currentTime: now,
        endTime: end,
        courseDescUrl: '@url',
        browseNum: '@integer(500, 1000)',
        isReserve: 0,
        isRelationGift: 1,
        isGetGift: 0
      }]
    }
  }
}
