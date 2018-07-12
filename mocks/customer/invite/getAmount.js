/**
 * 获取邀请人数
 * @url customer/invite/getAmount
 */

module.exports = function () {
  return {
    "result": 10000,
    "msg": "ok",
    "data": {
      "amount|0-999": 16
    }
  }
}