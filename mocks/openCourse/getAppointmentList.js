/**
 * 获取预约记录
 * @url openCourse/getAppointmentList
 */
module.exports = function () {
  var now = +new Date();
  return {
    result: 10000,
    msg: 'ok',
    data: {
      count: '@integer(20,100)',
      nextOffset: 10,
      'list|4-10': [{
        syllabusId: '@id',
        courseName: '@ctitle(10)',
        courseBanner: '@image("750x600")',
        courseDesc: '@ctitle(100)',
        beginTime: now,
        endTime: now,
        currentTime: now,
        'hasRecord|1': [0,1] //0 没有录波 1 有录播
      }]
    }
  }
};
