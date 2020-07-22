import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.kinonews.ru/insimgs/poster/poster9623_1.jpg" alt="avatar"/>
      <div>
        {props.message}
      </div>
      <div>
        <span>{props.likesCount} </span>Likes
      </div>
    </div>
  )
}

export default Post