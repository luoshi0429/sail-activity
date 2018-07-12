/**
 * 获取banner列表
 * @url /legion8th/banner/getList
 */
module.exports = function () {
  var now = +new Date()
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'list|7': [
        {
          'id': '@id',
          'title': '@ctitle',
          'picUrl': '@image("375x100")',
          // 'businessType': 'questionnaire',
          'businessType|+1': ['define_url', 'marketing_course', 'formal_course', 'strategy', 'common', 'share_get_study', 'questionnaire'],
          'businessId': '@id',
          'linkUrl': 'https://www.baidu.com',
          'needAuth': 1
        }
      ]
    }
  }
}
