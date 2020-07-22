import React from 'react'
import Messages from './Messages'
import {sendMessageCreator, updateMessageCreator} from '../redux/reducers/messagesReducer'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesReducer.dialogsData,
    messagesData: state.messagesReducer.messagesData,
    newMessageText: state.messagesReducer.newMessageText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => dispatch(updateMessageCreator(text)),
    sendMessage: () => dispatch(sendMessageCreator())
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer