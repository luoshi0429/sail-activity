import wepy from 'wepy'
import store from '@/store/index'
import { UpdateUserInfoSuccess } from '@/store/actions'

import config from '@/helper/config'

const path = config.path
const codeVersion = config.codeVersion

function _fetch (url, params, config = {}) {
  // console.log('fetch请求发起', url, params)
  return new Promise((resolve, reject) => {
    wepy.request({
      url: `${path}/${url}`,
      data: params,
      method: 'GET',
      header: {
        'X-Requested-With': 'XMLHttpRequest',
        ...config
      }
    }).then(({ data }) => {
      // console.log('fetch请求返回', url, params, data)
      if (data.code === 2000) {
        resolve(data.data)
      } else {
        reject(data)
      }
    })
  })
}

function _post (url, params, config = {}) {
  console.log('post请求发起', url, params)
  return new Promise((resolve, reject) => {
    wepy.request({
      url: `${path}/${url}`,
      // data: {
      //   data: JSON.stringify(params)
      // },
      data: params,
      method: 'POST',
      header: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Content-Type': 'application/json; charset=UTF-8',
        ...config
      }
    }).then(({ data }) => {
      // console.log('post请求返回', url, params, data)
      if (data.code === 2000) {
        resolve(data.data)
      } else {
        reject(data)
      }
    })
  })
}

function fetch (url, params, config) {
  return getAccessToken().then(accessToken => {
    return _fetch(url, params, { accessToken: accessToken, ...config })
  })
}

function post (url, params, config) {
  return getAccessToken().then(accessToken => {
    return _post(url, params, { accessToken: accessToken, ...config })
  })
}

let accessToken = ''
const getAccessToken = () => {
  return new Promise((resolve, reject) => {
    if (accessToken) {
      resolve(accessToken)
    } else {
      wepy.login().then((res) => {
        console.log(res, 'res')
        _post('api/user/authcation', { code: res.code }).then(r => {
          accessToken = r.accessToken
          resolve(accessToken)
        })
      })
    }
  })
}

let sessionPromise = null
function getSessionByLogin () {
  if (!sessionPromise) {
    sessionPromise = new Promise((resolve, reject) => {
      getProjectIdPromise().then((projectId) => {
        return wepy.login().then(({ code }) => {
          return _fetch('common/jscode2session', {
            code,
            codeVersion,
            projectId
          }).then(({ result }) => {
            if (result) {
              const { openid, session_key } = result
              resolve({
                openid,
                session_key
              })
            } else {
              reject(new Error())
            }
          })
        })
      })
    })
  }
  return sessionPromise
}

function getConfig () {
  return getProjectIdPromise().then((projectId) => {
    return _post('common/getConfig', {
      codeVersion,
      projectId
    })
  })
}

function saveCustomer (data) {
  return post('customer/saveCustomer', {
    ...data
  }).then(() => {
    setGetCustomerPromise()
  })
}

// parseQrCodeScene
let parseQrcodePromise = null
let lastSceneId = null
function setParseQrcodePromise (sceneId, query) {
  parseQrcodePromise = new Promise((resolve, reject) => {
    if (sceneId) {
      _post('common/getQrcodeParameter', {
        codeVersion,
        sceneId
      }).then((data) => {
        lastSceneId = sceneId
        resolve({
          ...query,
          ...JSON.parse(data.parameter)
        })
      }, (err) => {
        reject(err)
      })
    } else {
      lastSceneId = sceneId
      resolve({ ...query })
    }
  })
  return parseQrcodePromise
}
function getParseQrcodePromise () {
  return parseQrcodePromise
}

// 获取projectId
let projectIdPromise = null
function setProjectIdPromise (projectId) {
  projectIdPromise = new Promise((resolve, reject) => {
    if (!projectId) {
      projectId = '10'
    }
    resolve(projectId)
  })
  return projectIdPromise
}
function getProjectIdPromise () {
  if (projectIdPromise) {
    return projectIdPromise
  } else {
    return getParseQrcodePromise().then((data) => {
      return setProjectIdPromise(data.projectId)
    })
  }
}
// opendid promise
let openIdPromise = null
function setOpenIdPromise () {
  openIdPromise = getSessionByLogin().then(({ openid, session_key }) => {
    store.dispatch({
      type: UpdateUserInfoSuccess,
      payload: {
        openid,
        session_key
      }
    })
    wepy.setStorageSync('openid', openid)
    // wepy.setStorageSync('session_key', session_key)
    return {
      openid,
      session_key
    }
  })
  return openIdPromise
}

function getOpenIdOnlyPromise () {
  const openid = wepy.getStorageSync('openid')
  if (openid) {
    // 即时有openid在缓存也先进行Login防止解析出错
    getOpenIdPromise()
    return Promise.resolve({
      openid
    })
  } else {
    return getOpenIdPromise()
  }
}

function getOpenIdPromise () {
  if (openIdPromise) {
    return openIdPromise
  } else {
    return getParseQrcodePromise().then(() => {
      return setOpenIdPromise()
    })
  }
}

let getCustomerPromise = null
function setGetCustomerPromise () {
  getCustomerPromise = new Promise((resolve, reject) => {
    Promise.all([getProjectIdPromise(), getOpenIdOnlyPromise()]).then((result) => {
      const [projectId, { openid, session_key }] = result
      _fetch('customer/getCustomer', {
        codeVersion,
        projectId,
        openId: openid
      }).then((data) => {
        store.dispatch({
          type: UpdateUserInfoSuccess,
          payload: data
        })
        resolve(data)
      })
    })
  })
  return getCustomerPromise
}

function getGetCustomerPromise () {
  if (getCustomerPromise) {
    return getCustomerPromise
  } else {
    return getParseQrcodePromise().then((data) => {
      return setGetCustomerPromise()
    })
  }
}
function getQrConfig (data) {
  return post('common/getQrConfig', {
    ...data
  })
}

export default {
  setParseQrcodePromise,
  getParseQrcodePromise,
  getOpenIdPromise,
  setGetCustomerPromise,
  getGetCustomerPromise,
  getConfig,
  saveCustomer,
  fetch,
  post,
  path,
  getQrConfig,
  _post,
  _fetch
}
