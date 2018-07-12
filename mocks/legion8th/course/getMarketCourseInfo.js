/**
 * 获取营销课详情接口
 * @url legion8th/course/getMarketCourseInfo
 */

module.exports = function () {
  var now = +new Date()
  const begin = now + 1000 * 60 * 0.2
  const end = now + 1000 * 60 * 60 * 2

  return {
    result: 10000,
    msg: 'ok',
    data: {
      courseName: '@ctitle',
      courseBanner: '@image("375x174")',
      courseDesc: '@ctitle',
      courseDate: end,
      beginTime: begin,
      endTime: end,
      currentTime: now,
      teacherName: '@cname',
      teacherProfile: '@ctitle',
      teacherUrl: '@image("60x60")',
      courseOutline: '如何系统学会专注、高效的深度学习|如何系统学会专注、高效的深度学|如何系统学会专注、高效的深度学',
      status: 0,
      liveRoomId: '',
      liveProvider: '',
      courseDescUrl: ['@image("375x100")', '@image("375x200")'],
      suitCrow: '想要提升学习效率的职场人|短时间内需要通过某项考试的人|想要提升学习效率的职场人',
      'courseForm|1': ['', '在线直播教学'],
      courseCondition: '这是一个华丽丽的报名须知|这是一个华丽丽的报名须知|这是一个华丽丽的报名须知|这是一个华丽丽的报名须知',
      'isThumbup|1': [1, 1],
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
          // 'activityType|1': ['common', 'questionnaire', 'study'],
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
