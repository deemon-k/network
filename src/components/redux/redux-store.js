import {combineReducers, createStore} from 'redux'
import profileReducer from './reducers/profileReducer'
import messagesReducer from './reducers/messagesReducer'
import sidebarReducer from './reducers/sideberReducer'
import usersReducer from './reducers/usersReducer'


let reducers = combineReducers({
  profileReducer,
  messagesReducer,
  sidebarReducer,
  usersReducer
})

let store = createStore(reducers)

export default store