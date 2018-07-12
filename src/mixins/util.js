import wepy from 'wepy'
import Util from '@/helper/util'
import store from '@/store'
import Api from '@/helper/api'
import { UpdateUserInfoSuccess } from '@/store/actions'

export default class extends wepy.mixin {
  onLoad (options) {
    const totalPage = this.getCurrentPages()
    const currentPage = totalPage[totalPage.length - 1].route
    if (currentPage.indexOf('8th') >= 0) {
      wepy.setStorageSync('LAST_PAGE', {
        path: '/pages/8th/index',
        name: '8th',
        title: '尚德机构莱特学院'
      })
    } else if (currentPage.indexOf('teacher') >= 0) {
      // wepy.setStorageSync('LAST_PAGE', {
      //   path: `/pages/teacher/index?belongTo=${store.getState().app.belongTo}`,
      //   name: 'teacher',
      //   title: '尚德教师'
      // })
    } else {
      // wepy.setStorageSync('LAST_PAGE', {})
    }
  }
  data = {
    ASSETS_PREFIX: 'https://static.sunlands.com/wechat-management/prod/openCourse'
  }
  analysis (event, ...res) {
    this.$broadcast('mta', event, res)
  }
    // 数据去重
  removeDuplicateItems (originList, appendList, identify) {
    if (!appendList || !appendList.length) {
      return originList
    }
    return [...originList, ...appendList]
  }
    // 对数据的时间进行格式化处理
  formatDataTime (data, column, formateString = 'hh:mm yyyy-MM-dd') {
    data[`${column}_format`] = Util.formatTime(data[column], formateString)
    return data
  }
    // 对列表的时间进行格式化处理
  formatListTime (list, columns, formateString = 'hh:mm yyyy-MM-dd') {
        // yyyy-MM-dd hh:mm:ss S
    if (!list || !list.length) return []
    var cb = null
    if (typeof columns === 'string') {
      cb = (item) => {
        this.formatDataTime(item, columns, formateString)
                // item[`${columns}_format`] = Util.formatTime(item[columns], formateString)
      }
    } else {
      cb = function (item) {
        columns.forEach(function (column) {
          this.formatDataTime(item, column, formateString)
                    // item[`${column}_format`] = Util.formatTime(item[column], formateString)
        })
      }
    }
    list.forEach(function (item) {
      cb(item)
    })
    return list
  }

  generateShareSnippet (options) {
    let {counselor, projectId, paramSkynet, recommendOpenId, ticket} = options || this.generateShareParams()
    return `counselor=${counselor || ''}&projectId=${projectId}&paramSkynet=${paramSkynet || ''}&recommendOpenId=${recommendOpenId}&ticket=${ticket}`
  }
  generateShareParams () {
    const app = store.getState().app
    const { counselor, organizationId: legionId, projectId, paramSkynet } = app
    const recommendOpenId = wepy.getStorageSync('openid')
    const ticket = `${recommendOpenId}_${Date.now()}`
    wepy.setStorageSync('ticket', ticket)
    return {
      counselor,
      legionId,
      projectId,
      recommendOpenId,
      ticket,
      paramSkynet
    }
  }

  mixinSaveCustomer ({ userInfo, encryptedData, iv }) {
    return this.mixinDecryptCustomerData(encryptedData, iv).then(({ unionId }) => {
      userInfo.unionId = unionId
      const app = store.getState().app
      const paramSkynetObj = app.paramSkynet ? { paramSkynet: app.paramSkynet } : {}
      Api.saveCustomer({
        ...userInfo,
        nickname: userInfo.nickName,
        ...paramSkynetObj
      }).then(() => {
        store.dispatch({
          type: UpdateUserInfoSuccess,
          payload: userInfo
        })
      })
      return unionId
    })
  }

  mixinDecryptCustomerData (encryptedData, iv) {
    return Api.getOpenIdPromise().then(({ openid, session_key }) => {
      return Api.post('customer/decryptCustomerData', {
        encryptedData,
        iv,
        sessionKey: session_key
      }).then(data => {
        const result = JSON.parse(data.decryptedData)
        return result
      })
    })
  }
}
