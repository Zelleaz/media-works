import { IComment, IPost } from "../../jsonPlaceholder"
import { Action } from "../actions"

export enum postsActionTypes {
  toggleLoading = 'TOGGLE_LOADING',
  loadPosts = 'LOAD_POSTS',
  loadPostComments = 'LOAD_POST_COMMENTS'
}

type LoadPosts = Action<postsActionTypes.loadPosts, IPost[]>
type LoadPostComments = Action<postsActionTypes.loadPostComments, {postId: number, comments: IComment[]}>
type ToggleLoading = Action<postsActionTypes.toggleLoading>

export type PostsAction = LoadPosts | LoadPostComments | ToggleLoading

export interface IPostsState {
  posts: IPost[]
  loading: boolean
}