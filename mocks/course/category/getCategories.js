/**
 * 获取课程分类信息
 * @url course/category/getCategories
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'categories|10-40': [
        {
          'id': '@id',
          'name': '@ctitle(6)',
          'sub_categories|8-16': [{
            'sub_category_id': '@id',
            'sub_category_name': '@ctitle(6)'
          }]
        }
      ]
    }
  }
}
