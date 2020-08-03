import {combineReducers, createStore} from 'redux'
import profileReducer from './reducers/profileReducer'
import messagesReducer from './reducers/messagesReducer'
import sidebarReducer from './reducers/sideberReducer'


let reducers = combineReducers({
  profileReducer,
  messagesReducer,
  sidebarReducer
})

let store = createStore(reducers)

export default store