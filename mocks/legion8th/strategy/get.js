/**
 * 获取攻略详情
 * @url legion8th/strategy/get
 */

module.exports = function () {
  var now = +new Date()
  const begin = now + 1000 * 60 * 60 * 1
  const end = now + 1000 * 60 * 60 * 2

  return {
    result: 10000,
    msg: 'ok',
    data: {
      id: '@id',
      title: '@ctitle',
      subtitle: '@ctitle',
      picUrl: '@image("375x174")',
      sharePicUrl: '@image("375x300")',
      browseNum: '@integer(500, 2000)',
      'hasThumbUp|1': [0, 0],
      teacherName: '@cname',
      profile: '@ctitle',
      teacherHeader: '@image("60x60")',
      'courseList|3-5': [
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
