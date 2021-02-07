import React from 'react'
import s from './User.module.css'
import avatarPlaceHolder from './../../../logo.svg'

const User = props => {
  return (
    <div>
      <div>
          <img src={avatarPlaceHolder} alt=""/>
      </div>
      <div>
        <div>
          <div>
            {props.name}  
          </div>
          <div>
            {props.status}
          </div>
          <div>
            LOCATION
          </div>
        </div>
        <div>
          {props.isFollowed ? <button>Unfollow</button> : <button>Follow</button>}          
        </div>
      </div>
    </div>
  )
}

export default User