import { handleActions } from 'redux-actions'
import { SaveLocation } from './actions'

export default handleActions({
  [SaveLocation] (state, actions) {
    const optionsPayLoad = actions.payload
    return {
      ...state,
      location: optionsPayLoad
    }
  }
}, {
  location: {
    lat: '',
    lng: ''
  }
})
