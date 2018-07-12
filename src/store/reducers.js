import {combineReducers} from 'redux'
import user from './user/reducers'
import app from './app/reducers'
import gift from './gift/reducers'
import giftsuperier from './giftsuperier/reducers'
import preload from './preload/reducers'

export default combineReducers({
  user,
  app,
  gift,
  giftsuperier,
  preload
})
