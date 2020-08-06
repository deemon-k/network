const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
  newPostText: '',
  postsData: [
    {id: 1, postMessage: 'Hi, How are you?', likesCount: 15},
    {id: 2, postMessage: 'It\'s my first post', likesCount: 12},
  ]
}

const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state}
  stateCopy.postsData = [...state.postsData]

  switch (action.type) {
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      }
      case ADD_POST:
        let text = state.newPostText
        return {
          ...state,
          postsData: [...state.postsData, {id: 5, postMessage: text, likesCount: 0}], newPostText: ''
        }

    default: return state
  }
}

export const addPostCreator = () => ({type: ADD_POST})
export const updatePostCreator = (text) => ({type: UPDATE_POST_TEXT, text: text})

export default profileReducer