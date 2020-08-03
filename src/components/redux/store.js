import profileReducer from './reducers/profileReducer'
import messagesReducer from './reducers/messagesReducer'
import sidebarReducer from './reducers/sideberReducer'

let store = {
  _subscriber() {
    console.log('No observers')
  },
  _state: {
    profilePage: {
      newPostText: '',
      postsData: [
        {id: 1, postMessage: 'Hi, How are you?', likesCount: 15},
        {id: 2, postMessage: 'It\'s my first post', likesCount: 12},
      ],
    },
    messagesPage: {
      dialogsData: [
        {id: 1, name: 'Gandalf'},
        {id: 2, name: 'Frodo'},
        {id: 3, name: 'Aragorn'},
        {id: 4, name: 'Sam'},
        {id: 5, name: 'Bilbo'},
        {id: 6, name: 'Galadriel'},
        {id: 7, name: 'Legolas'}
      ],
      newMessageText: '',
      messagesData: [
        {id: 1, messageText: 'Hi'},
        {id: 2, messageText: 'How are u?'},
        {id: 3, messageText: 'What with One Ring'},
        {id: 4, messageText: 'Yo'},
        {id: 5, messageText: 'Yo'}
      ],
    },
    sidebar: {
      friendsList: [
        {id: 1, firstName: 'Gandalf', lastName: 'Grey', isOnline: false},
        {id: 2, firstName: 'Frodo', lastName: 'Beggins', isOnline: true},
        {id: 3, firstName: 'Aragorn', lastName: 'Telcontar', isOnline: false},
        {id: 4, firstName: 'Sam', lastName: 'Gamgee', isOnline: true},
        {id: 5, firstName: 'Bilbo', lastName: 'Beggins', isOnline: false},
        {id: 6, firstName: 'Galadriel', lastName: 'Nerwen', isOnline: true},
        {id: 7, firstName: 'Legolas', lastName: 'Greenleaf', isOnline: true}
      ]
    }
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._subscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._subscriber(this._state)
  }
}

window.store = store
export default store