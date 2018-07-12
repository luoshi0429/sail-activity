/**
 * 领取录取通知书
 *
 * @url agent/evaluate/getStudentBaseInfo
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      nickName: '王同学',
      headImg: 'http://img/1.jpg',
      province: 'hubei',
      city: 'wuhan',
      matchTime: '2017-12-12 12:00'
    }
  }
}
