/**
 * 获取邀请活动数据
 * @url customer/invite/getAmountAndRule
*/


module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      "inviteAmount|0-999": 3,
      "creditAmount|0-999": 11,
      "rule":'1，点击邀请好友按钮，分享任意公开课；|2，好友需成功预约公开课并首次授权手机才算邀请成功；|3，成功邀请一个好友可得到一个学分，学分可用用来兑换精品课程；|4，兑换时，选择一门付费课程点击“立即兑换”即可兑换成功；|5，尚德机构拥有该活动的最终解释权。'
    }
  }
}