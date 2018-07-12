import { handleActions } from 'redux-actions'
import { UpdateUserInfoSuccess, UpdateUserInfoFail } from './actions'

export default handleActions({
  [UpdateUserInfoSuccess] (state, actions) {
    let user = actions.payload
    if (user.nickName) {
      user.nickname = user.nickName
    } else if (user.nickname) {
      user.nickName = user.nickname
    }
    return {
      ...state,
      ...user,
      deny: false
    }
  },
  [UpdateUserInfoFail] (state) {
    return {
      ...state
    }
  }
}, {
  avatarUrl: '',
  city: '',
  counselor: '',
  country: '',
  gender: '',
  isCounselor: '',
  language: '',
  legionId: '',
  nickname: '',
  openId: '',
  phoneNumber: '',
  province: '',
  unionId: '',
  wechatName: '',
  nickName: '',
  newUser: 0,
  deny: true
})
