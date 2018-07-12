/**
 * 获取证书信息
 *
 * @url certificate/getInfo
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      studentName: '@name',
      schoolName: 'xxxxx大学',
      specialty: '报考专业',
      courseName: '课程名',
      createTime: '2018-05-30 18:00:00',
      status: 0
    }
  }
}