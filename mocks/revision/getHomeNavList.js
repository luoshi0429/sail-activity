/**
 *  获取首页导航栏列表
 * @url revision/getHomeNavList
 */

module.exports = function () {
    return {
      result: 10000,
      msg: 'ok',
      data: {
        'resultList': [
            {

                image: 'https://static.sunlands.com/wechat-management/prod/openCourse/assets/v2.2/index_tab1.png',
                name: '职场技能',
                jumpType: 'page', // h5_href
                href: '/pages',
                pageUrl: '/pages/home/more?categoryId=3',
                id: 3
              },
              {
                image: 'https://static.sunlands.com/wechat-management/prod/openCourse/assets/v2.2/index_tab2.png',
                name: '管理晋升',
                jumpType: 'page',
                pageUrl: '/pages/home/more?categoryId=4',
                id: 4
              },
              {
                image: 'https://static.sunlands.com/wechat-management/prod/openCourse/assets/v2.2/index_tab3.png',
                name: '人文认知',
                jumpType: 'page',
                pageUrl: '/pages/home/more?categoryId=5',
                id: 5
              },
              {
                image: 'https://static.sunlands.com/wechat-management/prod/openCourse/assets/v2.2/index_tab5.png',
                name: '尚德教师',
                jumpType: 'page',
                pageUrl: '/pages/teacher/index',
                id: 'teacher'
              },
              {
                image: 'https://static.sunlands.com/wechat-management/prod/openCourse/assets/sdTeacher/enterCheck.png',
                name: '测试123',
                jumpType: 'h5_href',
                href: 'https://static.sunlands.com/wechat-management/prod/openCourse/assets/sdTeacher/teacherH5/index.html',
                id: 4
              },
        ]
      }
    }
  }
  