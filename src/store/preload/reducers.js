import { handleActions } from 'redux-actions'
import { SavePreloadInformation } from './actions'

export default handleActions({
  [SavePreloadInformation] (state, actions) {
    const preloadInformation = actions.payload
    return {
      ...state,
      ...preloadInformation
    }
  }
}, {
  video: {},
  preloadData: ''
})
