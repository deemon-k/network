import React from 'react'
import Friend from './Friend/Friend'
import s from './FriendsList.module.css'

const FriendsList = (props) => {
  let friendsListElements = props.friendsList.map(friend => <Friend id={friend.id} firstName={friend.firstName} lastName={friend.lastName} status={friend.isOnline} />)
  return(
    <div className={s.friendsList}>
      <div>
        <h4>Friends</h4>
      </div>
      {friendsListElements}
    </div>
  )
}

export default FriendsList