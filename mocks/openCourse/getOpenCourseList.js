/**
 * 获取公开课列表
 *
 * @url openCourse/getOpenCourseList
 */
let i = 1
module.exports = function () {
  var now = +new Date();
  const begin = now + 1000 * 60 * 60 * (i % 2 === 0 ? 1 : 2)
  i += 1
  return {
    result: 10000,
    msg: 'ok',
    data: {
      count: '@integer(20,100)',
      nextOffset: 10,
      'list|5': [{
        syllabusId: '@id',
        courseName: '@ctitle(20)',
        courseDesc: '@ctitle(50)',
        courseBanner: '@image("600x410")',
        'positionalTitle|1': ['高级教师', '中级教师', '特级教师'],
        'status|1': [1, 2], // 1直播中,2带直播
        beginTime: begin,
        currentTime: now,
        'signUpAmount|500-2000': 500
      }]
    }
  }
}
