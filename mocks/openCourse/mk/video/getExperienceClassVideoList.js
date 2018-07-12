/**
 * 获取公开课列表
 *
 * @url openCourse/mk/video/getExperienceClassVideoList
 */
module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      "list|10":[{
        "id":'@id',
        "materialId":'@id',
        "bannerUrl":"@image('314x176')",
        "name":"自考",
        "desc":"资料名称",
        "duration":30
      }]
    }
  }
}
