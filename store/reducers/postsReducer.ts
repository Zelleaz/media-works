import { IPostsState, PostsAction, postsActionTypes } from "../types/redux/reducers/posts"

const initialState: IPostsState = {
  loading: false,
  posts: []
}

export const postsReducer = (state: IPostsState = initialState, action: PostsAction): IPostsState => {
  switch (action.type) {
    case postsActionTypes.loadPostComments:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,
              comments: action.payload.comments
            }
          } else {
            return post
          }
        })
      }
    case postsActionTypes.loadPosts:
      return {
        ...state,
        posts: action.payload
      }
    case postsActionTypes.toggleLoading:
      return {
        ...state, 
        loading: !state.loading
      }
    default: return state
  }
}