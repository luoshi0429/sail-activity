import wepy from 'wepy'
import store from '@/store/index'
import { UpdateUserInfoSuccess } from '@/store/actions'

// const path = 'https://beta-sdkhealth.healthmall.cn/activity-service' // 'https://sdkhealth.healthmall.cn'
const path = 'https://sdkhealth.healthmall.cn/activity-service' // 'https://sdkhealth.healthmall.cn'

function _fetch (url, params, config = {}) {
  console.log('fetch请求发起', url, params)
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
      console.log('fetch请求返回', url, params, data)
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
      data: params,
      method: 'POST',
      header: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8',
        ...config
      }
    }).then(({ data }) => {
      console.log('post请求返回', url, params, data)
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
function getAccessToken () {
  return new Promise((resolve, reject) => {
    if (accessToken) {
      resolve(accessToken)
    } else {
      wepy.login().then((res) => {
        _post('api/user/authcation', { code: res.code }).then(r => {
          accessToken = r.accessToken
          resolve(accessToken)
        })
      })
    }
  })
}

function saveUserInfo (data) {
  return post('api/user/save/info', data).then(r => {
    return r
  })
}

let getUserInfoPromise
function getUserInfo () {
  getUserInfoPromise = fetch('api/user/info').then(r => {
    store.dispatch({
      type: UpdateUserInfoSuccess,
      payload: r
    })
    return r
  })
  return getUserInfoPromise
}


function gotUserInfo () {
  if (getUserInfoPromise) {
    return getUserInfoPromise
  } else {
    return getUserInfo()
  }
}

export default {
  fetch,
  post,
  path,
  saveUserInfo,
  getUserInfo,
  gotUserInfo
}
