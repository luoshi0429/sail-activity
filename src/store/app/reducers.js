import { handleActions } from 'redux-actions'
import { SaveLocation } from './actions'

export default handleActions({
  [SaveLocation] (state, actions) {
    const optionsPayLoad = actions.payload
    return {
      ...state,
      ...optionsPayLoad
    }
  }
}, {
  location: {
    lat: '',
    lng: ''
  },
  cityId: '440100',
  cityName: '广州'
})
