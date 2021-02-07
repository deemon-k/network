const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS_DATA = 'SET_USERS_DATA'

let initialState = {
  usersData: [
    {id: 1, name: 'Dmitry', isFollowed: true, status: 'Default man', area: {country: 'Ukraine', city: 'Kharkiv'}},
    {id: 2, name: 'Valera', isFollowed: false, status: 'Anime Lover', area: {country: 'Russia', city: 'Saint Petersburg'}},
    {id: 3, name: 'Elizabeth', isFollowed: true, status: 'Queen of The United Kingdom of Great Britain and Northern Ireland', area: {country: 'UK', city: 'London'}},
    {id: 4, name: 'Artem', isFollowed: true, status: 'Just Pidor', area: {country: 'Ukraine', city: 'Kharkiv'}}
  ]
}

const usersReducer = (state = initialState, action) => {
  let stateCopy = {...state}
  stateCopy.usersData = [...state.usersData]

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId) {
            return {...user, isFollowed: true}
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId) {
            return {...user, isFollowed: false}
          }
          return user
        })
      }
    case SET_USERS_DATA:
      return {
        ...state,
        usersData: [...state.usersData, ...action.usersData]
      }
    default: return state
  }
}

export const followCreator = userId => ({type: FOLLOW, userId})
export const unfollowCreator = userId => ({type: UNFOLLOW, userId})
export const setUsersDataCreator = usersData => ({type: SET_USERS_DATA, usersData})

export default usersReducer