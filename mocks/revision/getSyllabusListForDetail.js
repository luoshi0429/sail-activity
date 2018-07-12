/**
 *  获取二级页面列表
 * @url revision/getSyllabusListForDetail
 */
let i = 1
module.exports = function () {
  var now = new Date().getTime();
  const begin = now + 1000 * 60 
  i += 1
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'syllabusList|10': [
        {
          'syllabusId|+1': 1,
          courseName: '@ctitle(30)',
          'courseType|1':[1, 2, 3, 4],
          courseBanner: '@image("750x600")',
          firstCourseBanner: '@image("750x600")',
          courseDesc: '@ctitle(50)',
          beginTime: begin,
          currentTime: now,
          firstCategoryId: '@id',
          secondCategoryId: '@id',
          'customerCount|1000-20000': 10000
        }
      ]
    }
  }
}
