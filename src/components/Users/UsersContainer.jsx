import React from 'react'
import Users from './Users'
import { followCreator, unfollowCreator, setUsersDataCreator } from '../redux/reducers/usersReducer'
import {connect} from 'react-redux'

let mapStateToProps = state => {
  return {
    usersData: state.usersReducer.usersData
  }
}

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => dispatch(followCreator(userId)),
    unfollow: userId => dispatch(unfollowCreator(userId)),
    setUserData: usersData => dispatch(setUsersDataCreator(usersData))
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer