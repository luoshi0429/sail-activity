/**
 * 获取公开课列表
 *
 * @url openCourse/homePage/getOpenCourseList
 */

module.exports = function () {
  var now = +new Date()
  return {
    result: 10000,
    msg: 'ok',
    data: {
      count: '@integer(20,100)',
      nextOffset: 10,
      list: [
        {
          syllabusId: '1',
          courseName: '@ctitle(20)',
          courseDesc: '@ctitle(50)',
          courseBanner: '@image("600x410")',
          'positionalTitle|1': ['高级教师', '中级教师', '特级教师'],
          status: 1, // 1直播中,2带直播
          beginTime: now,
          currentTime: now,
          'signUpAmount|500-2000': 500
        },
        {
          syllabusId: '2',
          courseName: '@ctitle(20)',
          courseDesc: '@ctitle(50)',
          courseBanner: '@image("600x410")',
          'positionalTitle|1': ['高级教师', '中级教师', '特级教师'],
          status: 2, // 1直播中,2带直播
          beginTime: now + 1000 * 60 * 60 * 2 + 1000 * 60 * 32,
          currentTime: now,
          'signUpAmount|500-2000': 500
        },
        {
          syllabusId: '3',
          courseName: '@ctitle(20)',
          courseDesc: '@ctitle(50)',
          courseBanner: '@image("600x410")',
          'positionalTitle|1': ['高级教师', '中级教师', '特级教师'],
          status: 2, // 1直播中,2带直播
          beginTime: now + 1000 * 60 * 60 * 100,
          currentTime: now,
          'signUpAmount|500-2000': 500
        }]
    }
  }
}
