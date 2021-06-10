import { IComment, IPost, IUser } from "../../jsonPlaceholder";
import { Action } from "../actions";

export enum usersActionTypes {
  loadUsers = 'LOAD_USERS',
  loadUserInfo = 'LOAD_USER_INFO',
  toggleLoading = 'TOGGLE_LOADING'
}

type LoadUsers = Action<usersActionTypes.loadUsers, IUser[]>
type LoadUserInfo = Action<usersActionTypes.loadUserInfo, IUser>
type ToggleLoading = Action<usersActionTypes.toggleLoading>

export type UsersAction = LoadUsers | LoadUserInfo | ToggleLoading

export interface IUsersState {
  users: IUser[]
  currentUser: IUser
  loading: boolean
}