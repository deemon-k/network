import React from 'react'
import s from './Header.module.css'
import logo from './../images/doomguy_face.png'

const Header = () => {
  return (
    <header className={s.header}>
      {/*<img src={logo} alt="logo"/>*/}
      <h1>Doomeer</h1>
    </header>
  )
}

export default Header