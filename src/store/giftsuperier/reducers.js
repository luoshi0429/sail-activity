import { handleActions } from 'redux-actions'
import { SaveGiftSuperierInformation } from './actions'

export default handleActions({
  [SaveGiftSuperierInformation] (state, actions) {
    const giftsuperierInformation = actions.payload
    return {
      ...state,
      ...giftsuperierInformation
    }
  }
}, {
  selectSuperier: [],
  maxNum: 0
})
