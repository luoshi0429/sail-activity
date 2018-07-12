/**
 *  获取课程分类
 * @url revision/getFirstCategoryList
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'resultList|3': [
        {
          categoryName: '@ctitle',
          categoryId: '@id'
        }
      ]
    }
  }
}
