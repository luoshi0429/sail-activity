/**
 * 1.1.1 获取套课列表
 * @url course/set/getList
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'count': '@integer(10, 20)',
      'nextOffset': '@integer(10, 20)',
      'list|16-30': [{
        'setSyllabusId': '@id',
        'courseName': '@ctitle(12)',
        'teacherProfile': '@ctitle(12)',
        'courseBanner': '@image("260x156")',
        'firstCategoryName|1': ['文学', '科学', '管理'],
        'exchangeCredit|2-5': 3
      }]
    }
  }
}
