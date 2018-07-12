/**
* 获取banner列表
* @url /legion8th/activity/mktQuestionnair/getQuestionnairInfo
*/
module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      count: 3,
      nextOffset: 4,
      // 'linkUrl|1': ['', 'www.baidu.com'],
      startTime: {},
      endTime: {},
      mktActivityInfo: {},
      'questionList|3-8': [
        {
          'id': '@id',
          'position|+1': 1,
          'question': '@ctitle',
          'optionsList|2-3': [
            {
              'id': '@id',
              'optionsPosition|+1': 1,
              'optionsLogo': '@ctitle',
              'optionsContent': '@ctitle'
            }
          ]
        }
      ]
    }
  }
}
