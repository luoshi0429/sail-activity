import {combineReducers} from 'redux'
import user from './user/reducers'
import app from './app/reducers'

export default combineReducers({
  user,
  app
})
