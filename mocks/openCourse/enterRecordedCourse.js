/**
 * 观看录播课
 * @url openCourse/enterRecordedCourse
 */
module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      liveUrl: 'http://open.talk-fun.com/room.php?ak=3ca3c100980a89f005b08c9ab0a8bcd2',
      'status|1': [0, 1, 2] // 0未上架，1已上架，2录制中
    }
  }
}
