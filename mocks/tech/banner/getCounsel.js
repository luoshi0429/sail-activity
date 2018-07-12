/**
 * 实时资讯列表
 * @url tech/banner/getCounsel
 */
module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      count: 10,
      nextOffset: 1,
      'list|4-10': [{
        title: '@ctitle',
        infoType: 1,
        source: 'abxc',
        picUrl: '@image("750x600")',
        content: '@csentence'
      }]
    }
  }
};
