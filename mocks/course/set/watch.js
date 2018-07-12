/**
 * 1.1.1 观看套课信息
 * @url course/set/watch
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: {
      'resultCode|1': ['success', 'no_exchanged', 'course_not_exists', 'get_url_failure'],
      url: 'http://open.talk-fun.com/room.php?ak=5a5d625ca22630884583ce1d7b772dc3'
    }
  }
}
