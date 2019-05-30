import { combineReducers } from 'redux'
import mainReducer from './modules/reducers/mainReducer'

const rootReducer = combineReducers({
  mainReducer,
})

export default rootReducer