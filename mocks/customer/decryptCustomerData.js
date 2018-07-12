/**
 * 解密用户信息
 * @url customer/decryptCustomerData
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      decryptedData: '{"result":{"phoneNumber":"1234567"}}'
    }
  }
}
