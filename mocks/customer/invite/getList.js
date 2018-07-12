/**
 * 获取邀请好友列表
 * @url customer/invite/getList
 */


module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      count: 1,
      nextOffset: 1,
      'list|28': [{
        syllabusId: '@id',
        phone:'@id',
        timestamp: + new Date(),
        credit:'1'
      }]
    }
  }
}