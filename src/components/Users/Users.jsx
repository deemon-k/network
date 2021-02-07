import React from 'react'
import User from './User/User'
import s from './Users.module.css'

const Users = props => {
  return <div>
      {
        props.usersData.map(user => <div className={s.user} key={user.id}>
          <div className={s.userPhoto}>
            <img src="" alt=""/>
          </div>
          <div className={s.userMain}>
            <div className={s.userInfo}>
              <div>
                {user.name}  
              </div>
              <div>
                {user.status}
              </div>
              <div>
                {user.area.country}
                {user.area.city}
              </div>
            </div>
            <div className={s.btn}>
              {user.isFollowed ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> : <button onClick={() => props.follow(user.id)}>Follow</button>}          
            </div>
          </div>
        </div>)
      }
    </div>
}
   
export default Users