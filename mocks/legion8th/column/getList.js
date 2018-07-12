/**
 * 获取栏目
 * @url /legion8th/column/getList
 */
module.exports = function () {
  var now = +new Date()
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'list|1-3': [
        {
          'columnId': 1,
          'columnTitle|+1': ['精选推荐', '报班详情', '报考攻略'],
          'contentType|+1': ['marketing_course', 'formal_course', 'strategy'],
          'courseList|3': [
            {
              'id': 1,
              'courseTitle': '@ctitle',
              'courseSubtitle': '课程子标题',
              'coursePicUrl': 'http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg',
              'courseBrowseNum': 1234,
              'courseType': 'formal_course',
              'coursePrice': 10800,
              'currentTime': now,
              'beginTime': now + 80000,
              'isReserve|1': [1, 1],
              'isRelationGift|1': [1, 1],
              'isGetGift|1': [0, 0]
            }
          ],
          'activityList|1-2': [
            {
              'activityId': 1,
              'activityTitle': '活动标题',
              // 'activityType|1': ['common', 'study', 'questionnaire'],
              'activityType': 'study',
              'picUrl': 'http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg',
              'postersUrl': 'http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg',
              'needAuth': 1,
              'needShare': 0,
              'needQuestionnaire': 0
            }
          ]
        }
      ]
    }
  }
}
