/**
 * 获取banner列表
 * @url openCourse/c/banner/getBannerList
 */
module.exports = function () {
  var now = +new Date()
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'list|7': [
        {
          'id': '@id',
          'name': '@ctitle',
          'image': '@image("375x100")',
          'courseType|+1': ['open_course', 'recorded_course', 'set_course'],
          'courseId': '@id',
          'pageUrl': 'https://www.baidu.com',
          'H5href': '@url'
        }
      ]
    }
  }
}
