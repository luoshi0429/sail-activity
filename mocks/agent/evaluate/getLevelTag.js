/**
 * 领取录取通知书
 *
 * @url agent/evaluate/getLevelTag
 */

module.exports = function () {
  return {
    result: 10000,
    msg: 'ok',
    data: [{
      level: 1,
      tags: [{
        id: 1,
        weight: 90,
        description: '毫无帮助'
      }, {
        id: 2,
        weight: 80,
        description: '态度恶劣'
      }, {
        id: 3,
        weight: 70,
        description: '一问三不知'
      }, {
        id: 4,
        weight: 60,
        description: '答非所问'
      }, {
        id: 5,
        weight: 50,
        description: '不回话'
      }, {
        id: 6,
        weight: 40,
        description: '经常骚扰'
      }]
    }, {
      level: 2,
      tags: [{
        id: 7,
        weight: 91,
        description: '基本解决问题'
      }, {
        id: 8,
        weight: 81,
        description: '态度平淡'
      }, {
        id: 9,
        weight: 71,
        description: '解答不太清楚'
      }, {
        id: 10,
        weight: 61,
        description: '专业知识一般'
      }, {
        id: 11,
        weight: 51,
        description: '回复不及时'
      }]
    }, {
      level: 3,
      tags: [{
        id: 7,
        weight: 91,
        description: '3基本解决问题'
      }, {
        id: 8,
        weight: 81,
        description: '3态度平淡'
      }, {
        id: 9,
        weight: 71,
        description: '3解答不太清楚'
      }, {
        id: 10,
        weight: 61,
        description: '3专业知识一般'
      }, {
        id: 11,
        weight: 51,
        description: '3回复不及时'
      }]
    }, {
      level: 4,
      tags: [{
        id: 7,
        weight: 91,
        description: '4基本解决问题'
      }, {
        id: 8,
        weight: 81,
        description: '4态度平淡'
      }, {
        id: 9,
        weight: 71,
        description: '4解答不太清楚'
      }, {
        id: 10,
        weight: 61,
        description: '4专业知识一般'
      }, {
        id: 11,
        weight: 51,
        description: '4回复不及时'
      }]
    }, {
      level: 5,
      tags: [{
        id: 7,
        weight: 91,
        description: '5基本解决问题'
      }, {
        id: 8,
        weight: 81,
        description: '5态度平淡'
      }, {
        id: 9,
        weight: 71,
        description: '5答不太清楚'
      }, {
        id: 10,
        weight: 61,
        description: '5专业知识一般'
      }, {
        id: 11,
        weight: 51,
        description: '5回复不及时'
      }]
    }]
  }
}
