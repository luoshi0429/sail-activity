/**
 * 1.1.1 获取套课信息
 * @url course/set/getInfo
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      setSyllabusId: '@id',
      courseName: '@ctitle(6,12)',
      courseBanner: '@image("750x600")',
      courseDetail: '<div style="border: 1px solid #ddd"><h3 style="textAlign: center">Headline</h3><p>曾将身体发肤 随便北风宰割但是我糟蹋了我你都不会有一丝痛楚</p><p>悲哀到碎落了黄叶只得堆空壳你都不知不觉</p><img src="https://static.sunlands.com/wechat-management/prod/openCourse/assets/btn_invitation.png" /></div>',
      'coursePrice|1': [699, 1999, 899, 699, 1299],
      'exchangeCredit|2-5': 1,
      teacher: {
        'name': '@ctitle(2,4)',
        'header': '@image("120x120")',
        'positionalTitle': '@ctitle',
        'profile': '@ctitle'
      },
      'hasExchanged|1': [0, 1],
      'canExchanged|1': [0, 1],
      'subCourseList|3-8': [{
        'subSetsyllabusId': '@id',
        'subSetCourseTitle': '@ctitle',
        'duration|100-200': 1,
        'sequence|+1': 1
      }]
    }
  }
}
