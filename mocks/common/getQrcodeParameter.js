/**
 * 获取二维码的参数
 * @url common/getQrcodeParameter
 */
module.exports = function () {
    return {
      result: 10000,
      msg: 'ok',
      data: {
          // parameter:'projectId=1&legionId=1&counselor=zhangsan&legionName=第8军团'
          parameter: '{"legionId": "","pages":"pages/comment/counselor","syllabusId":"","counselor":"fenghaisheng","projectId":10,"legionName":"","paramSkynet":"123456"}'
      }
    }
  }
  