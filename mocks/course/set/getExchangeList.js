/**
* 获取兑换记录列表
* @url course/set/getExchangeList
*/

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      count: 1,
      nextOffset: 1,
      'list|8': [{
        setSyllabusId: '@id',
        courseName: '@ctitle(10)',
        teacherProfile: '@ctitle(50)',
        courseBanner: '@image("750x600")',
        timestamp: + new Date(),
        credit:'1'
      }]
    }
  }
}