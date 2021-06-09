import { IUser } from "../types/jsonPlaceholder";
import { UsersAction, usersActionTypes } from "../types/redux/reducers/users";

export const loadUsersCreator = (payload: IUser[]): UsersAction => {
  return {
    type: usersActionTypes.loadUsers,
    payload
  }
}

export const loadUserInfoCreator = (payload: IUser): UsersAction => {
  return {
    type: usersActionTypes.loadUserInfo,
    payload
  }
}

export const toggleUsersLoadingCreator = (): UsersAction => {
  return {
    type: usersActionTypes.toggleLoading,
    payload: null
  }
}