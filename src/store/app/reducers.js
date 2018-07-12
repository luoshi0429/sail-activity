import { handleActions } from 'redux-actions'
import { UpdateAppConfig, SaveOptions } from './actions'

export default handleActions({
  [UpdateAppConfig] (state, actions) {
    const appConfig = actions.payload
    return {
      ...state,
      ...appConfig
    }
  },
  [SaveOptions] (state, actions) {
    const optionsPayLoad = actions.payload
    return {
      ...state,
      ...optionsPayLoad
    }
  }
}, {
  needAuth: 0, // 1: 需要强制授权
  isAuditing: true,
  appName: '',
  appId: '',
  appImage: '',
  eventId: '',
  siteId: '',
  projectId: '',
  counselor: '',
  organizationId: '',
  eventSource: '',
  paramSkynet: '',
  recommendOpenId: '',
  queryCounselor: '',
  scene: '',
  shareTicket: '',
  mkSecId: '', // 营销课分享出去的分类id
  belongTo: '',
  meiqiaSiteId: '',
  meiqiaGroupToken: '',
  homepageSuperierTagId: -1,    // 首页精品课标签
  homepageRecordTagId: -1    // 首页录播课标签
})
