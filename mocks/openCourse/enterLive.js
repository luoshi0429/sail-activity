/**
 * 观看直播课
 * @url openCourse/enterLive
 */
module.exports = function () {
  var now = +new Date();
  return {
    result: 10000,
    msg: 'ok',
    data: {
      liveUrl: 'http://open.talk-fun.com/room.php?ak=3ca3c100980a89f005b08c9ab0a8bcd2',
      current: now,
      endTime: now,
      beginTime: now,
      status: 1
    }
  }
}
