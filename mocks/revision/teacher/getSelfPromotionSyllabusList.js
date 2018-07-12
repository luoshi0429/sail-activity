/**
 *  查询教师备考直播课
 * @url revision/teacher/getSelfPromotionSyllabusList
 */
module.exports = function () {
  var now = new Date().getTime();
  const begin = now + 1000 * 60
  return {
    result: 10000,
    msg: 'ok',
    data: {
      "syllabusList|4":[{
        "syllabusId":2,
        "courseName":"123",
        "courseBanner":"@image('260x146')",
        "beginTime":1526472940964,
        "customerCount":100,
        "courseDesc":'123fefefefefe123fefefefefe123fefefefefe123fefefefefe',
        "currentTime":begin,
        "courseType":2
     }]
    }
  }
}
