/**
 *  查询教师备考直播课
 * @url revision/teacher/getTeacherPreparationSyllabus
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
      "syllabusId":1,
      "courseName":"@name",
      "firstCourseBanner":"@image('670x236')",
      "beginTime":1526470975947,
      "customerCount":100,
      "courseType": 2,
      "currentTime":begin
    }
  }
}
