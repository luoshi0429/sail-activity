/**
 * 获取学习记录
 * @url openCourse/getLearningList
 */
module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      count: 1,
      nextOffset: 1,
      'list|10-20': [{
        'syllabusId|+1': 1,
        courseName: '@ctitle(100)',
        courseBanner: '@image("750x600")',
        courseDesc: '@ctitle(100)',
        learnTime: +new Date()
      }]
    }
  }
}
