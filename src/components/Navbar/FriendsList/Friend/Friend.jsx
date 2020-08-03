import React from 'react'
import s from './Friend.module.css'
import emptyAvatar from './../../../images/emptyAvatar.png'

const Friend = (props) => {
  return(
    <div className={s.friendProfile}>
      <div className={s.profileImage}>
        <img src={emptyAvatar} alt="emptyAva" />
      </div>
      <div className={s.friendData}>
        {props.firstName} {props.lastName}
      </div>
    </div>
  )
}

export default Friend