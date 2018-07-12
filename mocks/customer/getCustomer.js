/**
 * 获取用户信息
 * @url customer/getCustomer
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      avatarUrl: '@image("150x150")',
      nickname: '@cname',
      gender: 1,
      country: 'china',
      province: '@province',
      language: 'ZH_CN',
      wechatName: 'yyf',
      phoneNumber: '12345678910',
      'isConsultor|1': [0, 1], // 0 否 1 是
      consultor: 'chenjiancai',
      legionId: 1,
      unionId: '1adf2341545346'
    }
  }
}
