let initialState = {
  friendsList: [
    {id: 1, firstName: 'Gandalf', lastName: 'Grey', isOnline: false},
    {id: 2, firstName: 'Frodo', lastName: 'Beggins', isOnline: true},
    {id: 3, firstName: 'Aragorn', lastName: 'Telcontar', isOnline: false},
    {id: 4, firstName: 'Sam', lastName: 'Gamgee', isOnline: true},
    {id: 5, firstName: 'Bilbo', lastName: 'Beggins', isOnline: false},
    {id: 6, firstName: 'Galadriel', lastName: 'Nerwen', isOnline: true},
    {id: 7, firstName: 'Legolas', lastName: 'Greenleaf', isOnline: true}
  ]
}

const sidebarReducer = (state = initialState, action) => {
  return state
}

export default sidebarReducer