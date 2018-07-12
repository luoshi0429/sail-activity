/** 
 * 获取精品课列表 
 * 
 * @url openCourse/getSuperierList 
 */ 
module.exports = function () { 
    return { 
      result: 10000, 
      msg: 'ok', 
      data: { 
        count: '@integer(20,100)', 
        nextOffset: '@integer(20,100)', 
        'list|1-20': [{ 
          syllabusId: '@id', 
          courseName: '@ctitle(10)', 
          courseBanner: '@image("260x156")', 
          'positionalTitle|1': ['高级教师', '中级教师', '特级教师'], 
          pv: '@integer(10,1000000)' 
        }] 
      } 
    } 
  }
