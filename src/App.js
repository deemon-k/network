import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Route} from 'react-router-dom'
import MessagesContainer from './components/Messages/MessagesContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import UsersContainer from './components/Users/UsersContainer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <div className={"central-block"}>
          <NavbarContainer />
          <div className="app-wrapper_main">
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/messages" render={() => <MessagesContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/users" render={() => <UsersContainer />} />
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App