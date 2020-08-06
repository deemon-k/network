const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let initialState = {
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
  ]
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      }
    case ADD_MESSAGE:
      let text = state.newMessageText
      return {
        ...state,
        messagesData: [...state.messagesData, {id: 6, messageText: text}],
        newMessageText: ''
      }
    default: return state
  }
}

export const sendMessageCreator = () => ({type: ADD_MESSAGE})
export const updateMessageCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})

export default messagesReducer