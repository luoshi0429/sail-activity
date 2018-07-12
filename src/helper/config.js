export default Object.assign({}, {
  // path: 'http://172.16.140.65:8040/wechat-api', // 测试环境
  // path : 'http://xiaogch.nat300.top/wechat-api', // 贵长
  // path : 'http://127.0.0.1:8087/api', // 本地mock;执行yarn mock 即可启用
  // path : 'http://10.250.90.85:8999/wechat-api', // 迪凯
  // path : 'http://10.251.221.102:8091/wechat-api', // 海胜
  // path : 'http://10.250.120.160:8082/wechat-api',  //才华
  // path : 'http://10.251.221.131:8081/wechat-api',  //有强
  // path : 'http://10.250.90.77:8083/wechat-api', //谢杜
  // path : 'http://10.251.221.131:8081/wechat-api',  //有强
  // path : 'http://123.103.41.13:8380/wechat-api', //负载
  // path : 'http://10.251.221.143:8080/wechat-api', // 陆作齐
  // path : 'http://10.251.221.135:8080/wechat-api',  // 666
  // path : 'http://172.16.140.65:8040/wechat-api', // 新测试环境
  // path: 'http://10.251.221.253:8081/wechat-api/',
  // path: 'http://10.250.90.99:8082/wechat-api/',
  path: 'https://wechatapi.sunlands.com/wechat-api',
  codeVersion: '2.3.0', //代码版本 用于审核
  reportAnalysisBaseUrl:'https://enterapp.sunlands.com/datacenter_app/dataService' // 数据上报的地址
}, __ENV__ === 'production' ? {
  path: 'https://wechatapi.sunlands.com/wechat-api',
  reportAnalysisBaseUrl:'https://datacenter.sunlands.com/datacenter_app/dataService'
} : {})
