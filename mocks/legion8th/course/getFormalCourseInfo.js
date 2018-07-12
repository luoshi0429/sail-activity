/**
 * 获取营销课详情接口
 * @url legion8th/course/getFormalCourseInfo
 */

module.exports = function () {
  var now = +new Date()
  const begin = now + 1000 * 60 * 60 * 1
  const end = now + 1000 * 60 * 60 * 2

  return {
    result: 10000,
    msg: 'ok',
    data: {
      courseName: '@ctitle',
      courseDesc: '@ctitle',
      courseBanner: '@image("375x174")',
      sharePicUrl: '@image("375x300")',
      browseNum: '@integer(500, 2000)',
      coursePrice: '@integer(1999, 19999)',
      courseDate: end,
      beginTime: begin,
      endTime: end,
      teacherName: '@cname',
      teacherProfile: '@ctitle',
      teacherUrl: '@image("60x60")',
      courseOutline: '',
      status: 0,
      liveRoomId: '',
      liveProvider: '',
      courseDescUrl: '',
      suitCrow: '',
      courseForm: '',
      courseCondition: '',
      isThumbup: 0,
      'studentComment|2-4': [
        {
          customerName: '@cname',
          customerPickUrl: '@image("24x24")',
          comment: '@ctitle',
          commentTime: '2018年02月18日 20:32',
          commentReply: '@ctitle'
        }
      ],
      'recommendCourse|3-5': [
        {
          courseId: '@id',
          courseTitle: '@ctitle',
          courseDesc: '@ctitle',
          coursePicUrl: '@image("345x160")',
          courseBrowseNum: '@integer(500, 1999)',
          'courseType|+1': ['formal_course', 'marketing_course', 'strategy'],
          'price': '@integer(999, 19999)',
          'currentTime': now,
          'beginTime': now + 80000
        }
      ],
      'activityList|2': [
        {
          'id': 1,
          'title': '活动标题',
          // 'activityType': 'common',
          'activityType|+1': ['questionnaire', 'study'],
          'picUrl': 'http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg',
          'postersUrl': 'http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg',
          'needAuth': 1,
          'needShare': 0,
          'needQuestionnaire': 0,
          linkUrl: 'http://www.baidu.com',
          status: 0,
          startTime: begin,
          endTime: end
        }
      ]
    }
  }
}
