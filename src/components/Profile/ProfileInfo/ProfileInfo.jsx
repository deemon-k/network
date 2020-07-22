import React from 'react'
import s from './ProfileInfo.module.css'
import avatar from './../../images/doomguy_face.png'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.wallpaper} src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="profile-header"/>
      </div>
      <div className={s.descriptionBlock}>
        <div><img className={s.avatar} src={avatar} alt="avatar"/></div>
        description
      </div>
    </div>
  )
}

export default ProfileInfo