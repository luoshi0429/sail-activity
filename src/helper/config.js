export default Object.assign({}, {
  path: 'http://beta-sdkhealth.healthmall.cn/activity-service',
  codeVersion: '2.3.0', //代码版本 用于审核
  reportAnalysisBaseUrl:'https://enterapp.sunlands.com/datacenter_app/dataService' // 数据上报的地址
}, __ENV__ === 'production' ? {
  path: 'https://wechatapi.sunlands.com/wechat-api',
  reportAnalysisBaseUrl:'https://datacenter.sunlands.com/datacenter_app/dataService'
} : {})
