import React from 'react'
import s from './Main.module.css'
import MyPosts from './MyPosts/MyPosts'

const Main = () => {
  return (
    <main className={s.main}>
      <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="profile-header"/>
      <div>
        avatar + description
      </div>
      <MyPosts/>
    </main>
  )
}

export default Main