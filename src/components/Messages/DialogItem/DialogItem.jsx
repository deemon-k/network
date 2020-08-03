import React from 'react'
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'
import dialogAvatar from './../../images/gandalf.jpg'

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <img src={dialogAvatar} alt="profile-image"/>
      <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem