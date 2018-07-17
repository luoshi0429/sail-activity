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
  headIcon: '',
  city: '',
  country: '',
  gender: '',
  nickname: '',
  openId: '',
  mobile: null,
  province: '',
  unionId: '',
  wechatName: '',
  nickName: '',
  deny: true,
  isJoinActivity: 0
})
