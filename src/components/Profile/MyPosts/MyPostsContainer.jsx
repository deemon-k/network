import React from 'react'
import MyPosts from './MyPosts'
import {addPostCreator, updatePostCreator} from '../../redux/reducers/profileReducer'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.postsData,
    newPostText: state.profileReducer.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => dispatch(updatePostCreator(text)),
    addPost: () => dispatch(addPostCreator())
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer