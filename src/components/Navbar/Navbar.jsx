import React from 'react'
import FriendsList from './FriendsList/FriendsList'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import logo from './../images/doomguy_face.png'

const Navbar = (props) => {
  return (
    <div className={s.side}>
      <div className={s.sideImg}>
        <img src={logo} alt=""/>
      </div>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="settings" activeClassName={s.active}>Settings</NavLink>
        </div>
      </nav>
      <FriendsList className={s.friendsList} friendsList={props.friendsList}/>
    </div>
  )
}

export default Navbar