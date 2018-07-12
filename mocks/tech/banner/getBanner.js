/**
 * banner列表
 * @url tech/banner/getBanner
 */
module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'list|4-10': [{
        id: '@id',
        picUrl: '@image("750x600")',
        'jump|1' : ['实时资讯', '了解尚德', '资讯详情']
      }]
    }
  }
};
