/**
 * 1.1.1 精品课解锁
 * @url course/set/syllabus/unlockSyllabusInfo
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      id: '@id',
      courseBanner: '@image("260x158")',
      courseName: '@ctitle',
      courseDetail: '@ctitle',
      categoryName: '@cname',
      'isJoin|1': [0, 1],
      visitNickName: '@cname',
      visitAvatarUrl: '@image("90x90")',
      'studyNum|100-200': 200
    }
  }
}
