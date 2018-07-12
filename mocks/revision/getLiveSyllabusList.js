/**
 *  获取直播课程区列表
 * @url revision/getLiveSyllabusList
 */
let i = 1
module.exports = function () {
  var now = +new Date();
  const begin = now + 1000 * 60 * 60 * (i % 2 === 0 ? 1 : 2)
  i += 1
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'liveSyllabusList|10': [
        {
          'syllabusId|+1': 1,
          courseName: '@ctitle(30)',
          'courseType|1':[1, 2, 3, 4],
          courseBanner: '@image("750x600")',
          courseThumbnail: '@image("750x600")',
          courseDesc: '@ctitle(50)',
          beginTime: begin,
          firstCategoryId: '@id',
          secondCategoryId: '@id',
          'customerCount|1000-20000': 10000
        }
      ]
    }
  }
}
