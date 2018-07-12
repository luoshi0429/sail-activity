/**
 * 1.1.1 精品课解锁
 * @url course/set/syllabus/getVisitLockInfo
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      id: '@id',
      courseBanner: '@image("260x158")',
      courseName: '@ctitle',
      courseDetail: '@ctitle',
      categoryName: '@cname',
      'status|1': [0, 1],
      shareContent: '@ctitle',
      'unlockList|1-5': [
        {
          name: '@cname',
          lockTime: '2018年4月20日',
          'lockInfo|+1': ['解锁课程', '+1学分', '+1学分', '+1学分', '+1学分', '+1学分', '+1学分']
        }
      ]
    }
  }
}
