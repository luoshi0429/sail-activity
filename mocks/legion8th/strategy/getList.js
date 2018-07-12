/**
 * 获取攻略列表
 * @url legion8th/strategy/getList
 */

module.exports = function () {
 
  return {
    result: 10000,
    msg: 'ok',
    data: {
      count: 10,
      nextOffset: 1,
      'list|3-5': [
        {
          id: '@id',
          title: '@ctitle',
          subtitle: '@ctitle',
          picUrl: '@image("345x160")',
          browseNum: '@integer(500, 1999)'
        }
      ]
    }
  }
}
