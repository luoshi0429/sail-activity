/**
 * 获取营销课列表
 * @url /legion8th/course/getFormalCourseList
 */
module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      count: 10,
      nextOffset: 11,
      'list|5': [
        {
          courseId: '@id',
          courseName: '@cname',
          courseDesc: '@ctitle',
          bannerUrl: '@image("390x169")',
          browseNum: '@integer(500, 1000)',
          coursePrice: '@integer(1000, 19999)',
          isReserve: 1,
          isRelationGift: 1
        }
      ]
    }
  }
}
