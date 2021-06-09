import { IComment, IPost } from "../types/jsonPlaceholder";
import { PostsAction, postsActionTypes } from "../types/redux/reducers/posts";

export const loadPostsCreator = (payload: IPost[]): PostsAction => {
  return {
    type: postsActionTypes.loadPosts,
    payload
  }
}

export const loadPostCommentsCreator = (payload: {comments: IComment[], postId: number}): PostsAction => {
  return {
    type: postsActionTypes.loadPostComments,
    payload
  }
}

export const togglePostsLoadingCreator = (): PostsAction => {
  return {
    type: postsActionTypes.toggleLoading,
    payload: null
  }
}