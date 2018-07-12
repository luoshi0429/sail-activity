/**
 * 获取套课各类课程数量接
 * @url course/category/getSetSyllabusSize
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'categories|10-40': [
        {
          'id': '@id',
          'name|2-6': '@ctitle',
          'amount|6-23': 1,
          'logo': '@image("116x116")',
          'sub_categories': [{
            'id': 2,
            'name': '二级目录',
            'amount': 12,
          'logo': 'https://wx.qlogo.cn/mmopen/vi_32/S63Qy4b8gTnE2ufABNeNJnXnEyibwUjJrx7c6zha5kWdsubbe6b9q3TP8eaAzGSEIbAdqk61HOfqkOjV9mDKVrg/0',
          }]
        }
      ]
    }
  }
}
