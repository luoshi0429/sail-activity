/**
 *  获取内容分类区列表
 * @url revision/getSyllabusListByCategory
 */
let i = 1
module.exports = function () {
  var now = new Date().getTime()
  const begin = now + 1000 * 60 * 60 * (i % 2 === 0 ? 1 : 2)
  i += 1
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'syllabusList': [
        {
          'syllabusId': 1,
          courseName: '@ctitle(20)',
          'courseType': 1,
          courseBanner: '@image("750x600")',
          courseThumbnail: '@image("750x600")',
          courseDesc: '@ctitle(50)',
          beginTime: now,
          currentTime: now,
          firstCategoryId: '@id',
          secondCategoryId: '@id',
          'customerCount|1000-20000': 10000
        },
        {
          'syllabusId|+1': 2,
          courseName: '@ctitle(20)',
          'courseType': 1,
          courseBanner: '@image("750x600")',
          courseThumbnail: '@image("750x600")',
          courseDesc: '@ctitle(50)',
          beginTime: 1525923570701,
          currentTime: now,
          firstCategoryId: '@id',
          secondCategoryId: '@id',
          'customerCount|1000-20000': 10000
        },
        {
          'syllabusId|+1': 2,
          courseName: '@ctitle(20)',
          'courseType': 1,
          courseBanner: '@image("750x600")',
          courseThumbnail: '@image("750x600")',
          courseDesc: '@ctitle(50)',
          beginTime: 1525769971199,
          currentTime: now,
          firstCategoryId: '@id',
          secondCategoryId: '@id',
          'customerCount|1000-20000': 10000
        },
        {
          'syllabusId': 3,
          courseName: '@ctitle(20)',
          'courseType': 3,
          courseBanner: '@image("750x600")',
          courseThumbnail: '@image("750x600")',
          courseDesc: '@ctitle(50)',
          beginTime: 1525906811299,
          currentTime: now,
          firstCategoryId: '@id',
          secondCategoryId: '@id',
          'customerCount|1000-20000': 10000
        },
        {
          'syllabusId': 4,
          courseName: '@ctitle(20)',
          'courseType': 3,
          courseBanner: '@image("750x600")',
          courseThumbnail: '@image("750x600")',
          courseDesc: '@ctitle(50)',
          beginTime: 1525978843667,
          currentTime: now,
          firstCategoryId: '@id',
          secondCategoryId: '@id',
          'customerCount|1000-20000': 10000
        },
        {
          'syllabusId': 5,
          courseName: '@ctitle(20)',
          'courseType': 3,
          courseBanner: '@image("750x600")',
          courseThumbnail: '@image("750x600")',
          courseDesc: '@ctitle(50)',
          beginTime: null,
          currentTime: now,
          firstCategoryId: '@id',
          secondCategoryId: '@id',
          'customerCount|1000-20000': 10000
        },
        {
          'syllabusId': 6,
          courseName: '@ctitle(20)',
          'courseType': 4,
          courseBanner: '@image("750x600")',
          courseThumbnail: '@image("750x600")',
          courseDesc: '@ctitle(50)',
          beginTime: null,
          currentTime: now,
          firstCategoryId: '@id',
          secondCategoryId: '@id',
          'customerCount|1000-20000': 10000
        },
      ]
    }
  }
}
