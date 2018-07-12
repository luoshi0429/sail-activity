import { handleActions } from 'redux-actions'
import { SaveGiftInformation } from './actions'

export default handleActions({
  [SaveGiftInformation] (state, actions) {
    const giftInformation = actions.payload
    return {
      ...giftInformation
    }
  }
}, {
  counselorQrCode: '',
  amount: ''
})
