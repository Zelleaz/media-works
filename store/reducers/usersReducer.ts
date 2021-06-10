import { IUsersState, UsersAction, usersActionTypes } from "../types/redux/reducers/users"


const initialState: IUsersState = {
  users: [],
  currentUser: {
    address: {
      city: '',
      geo: {
        lat: '',
        lng: ''
      },
      street: '',
      suite: '',
      zipcode: ''
    },
    company: {
      bs: '',
      catchPhrase: '',
      name: ''
    },
    email: '',
    id: 0,
    name: '',
    phone: '',
    username: '',
    website: ''
  },
  loading: false
}

export const usersReducer = (state: IUsersState = initialState, action: UsersAction): IUsersState => {
  switch (action.type) {
    case usersActionTypes.loadUserInfo:
      return {
        ...state,
        currentUser: action.payload
      }
    case usersActionTypes.loadUsers:
      return {
        ...state,
        users: action.payload
      }
    case usersActionTypes.toggleLoading:
      return {
        ...state,
        loading: !state.loading
      }
    default:
      return state
  }
}