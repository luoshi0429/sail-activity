/**
 * 获取攻略详情
 * @url legion8th/activity/mktStudy/getStudyActivityDetail
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      id: '@id',
      title: '@ctitle',
      picUrl: '@image("375x300")',
      postersUrl: '@image("375x667")',
      startTime: '2018-03-22',
      endTime: '2018-04-22',
      neeShare: 0,
      linkUrl: 'www.baidu.com',
      status: 1,
      'activityType|1': ['common', 'study', 'questionnaire'],
      currentTime: '2018-03-27',
      courseList: {
        'businessType|1': ['marketing_course', 'formal_course', 'strategy'],
        businessId: '@id'
      }
    }
  }
}
