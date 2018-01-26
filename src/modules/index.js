import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import menu from './menu'

export default combineReducers({
  router: routerReducer,
  counter,
  menu
})
