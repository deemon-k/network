import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) => {

  let postsElements = props.postsData.map(post => <Post message={post.postMessage} likesCount={post.likesCount} />)

  let newPostElement = React.createRef()

  let onAddPost = () => props.addPost()

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div className={s.postCreator}>
        New Post
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} placeholder={'Add New Post'} />
        </div>
        <div>
          <button onClick={onAddPost}>
            Add Post
          </button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts