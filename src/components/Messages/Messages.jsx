import React from 'react'
import s from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

const Messages = (props) => {

  let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
  let messagesElements = props.messagesData.map(message => <MessageItem messageText={message.messageText} key={message.id} id={message.id} />)

  let newMessageEl = React.createRef()

  let sendMessage = () => props.sendMessage()

  let onMessageChange = () => {
    let text = newMessageEl.current.value
    props.updateNewMessageText(text)
  }

  return (
    <main className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.textArea}>
          <textarea onChange={onMessageChange} ref ={newMessageEl} value={props.newMessageText} placeholder={'Message...'} />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </main>
  )
}

export default Messages