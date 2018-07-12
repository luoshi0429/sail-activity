/**
 * 活动
 *
 * @url openCourse/c/public/getActivityList
 */


module.exports = function () {
    return {
      'result': 10000,
      'msg': 'ok',
      'data': {
        'list': [
            {
                activityId: 1,
                giftId: 1,
                title: '必杀技-教你玩转Excel',
                picUrl: 'http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg',
                courseId: 86,
                price: '299',
                content: '你与准点下班的距离，\n可能就差这几个Excel技巧。\n简单的页面到常用操作，\n就算你是电脑黑洞，也能掌握常用excel技巧',
                ifHas: 0
              },
              {
                activityId: 2,
                giftId: 2,
                title: '巧用思维导图，工作生活事半功倍',
                picUrl: 'http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg',
                courseId: 14,
                price: '99',
                content: '世界上的500强大企业，\n都在使用思维导图帮助他们的工作，\n提高效率，解决难题，\n职场人士必备技能。',
                ifHas: 0
              },
              {
                activityId: 3,
                giftId: 3,
                title: '职场必备PPT技能',
                picUrl: 'http://static.sunlands.com/wechat-management/prod/cr/course/20171213-36-sbzxbgtfb_imageUrl.jpg',
                courseId: 14,
                price: '99',
                content: '从技巧、逻辑，到文字、排版，\n只需三节课的时间，\n教你轻松摆平老板，\n做出专业级炫酷PPT',
                ifHas: 1
              }
        ]
      }
    }
  }
