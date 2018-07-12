/**
 * 获取公开课列表
 *
 * @url openCourse/mk/video/getTeacherVideoList
 */
module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      "list|5": [{
        "id": '@id',
        "materialId": '@id',
        "bannerUrl": "@image('149x84')",
        "name": "自考",
        "desc": "资料名称",
        "duration": 3000
      }]
    }
  }
}
