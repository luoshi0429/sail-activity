/**
 * 获取公开课信息
 *
 * @url openCourse/getOpenCourseInfo
 */
module.exports = function () {
  var now = +new Date();
  return {
    result: 10000,
    msg: 'ok',
    data: {
      syllabusId: '@id',
      courseName: '@ctitle(10)',
      courseBanner: '@image("750x600")',
      courseDesc: '@ctitle(1000)',
      courseOutline: '@ctitle(20)',
      // 'status|1': [0，1],//0 未取消  1 已取消
      //直播中
      // status: 0,
      // beginTime: now - 100000,
      // endTime: now + 100000,
      // currentTime: now,
      // 已结束
      // status: 0,
      // beginTime: now - 100000,
      // endTime: now,
      // currentTime: now + 10000,
      // 已取消
      // status: 1,
      // beginTime: now,
      // endTime: now,
      // currentTime: now,
      status: 0,
      beginTime: now,
      currentTime: now - 1000000,
      endTime: now + 10000,
      name: '@cname',
      header: '@image("150x150")',
      'positionalTitle|1': ['高级教师', '中级教师', '特级教师'],
      profile: '@ctitle(50)',
      'recommendList|4': [{
        syllabusId: '@id',
        courseName: '@ctitle(20)',
        courseBanner: '@image("750x600")',
        'positionalTitle|1': ['高级教师', '中级教师', '特级教师'],
      }],
      // 'hasAppointed|1': [0, 1]//是否预约 0 否 1 是
      hasAppointed:0
    }
  }
}
