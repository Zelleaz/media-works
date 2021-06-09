import { IComment, IPost, IUser } from "../store/types/jsonPlaceholder"

const url = 'https://jsonplaceholder.typicode.com/'

export const getUsers = (): Promise<IUser[]> => {
  return fetch(url + 'users')
    .then(res => res.json())
    .then(data => {
      return data
    })
}

export const getPosts = (): Promise<IPost[]> => {
  return fetch(url + 'posts')
    .then(res => res.json())
    .then(data => {
      return data
    })
}

export const getComments = (postId: number): Promise<IComment[]> => {
  return fetch(`${url}posts/${postId}/comments`)
    .then(res => res.json())
    .then(data => {
      return data
    })
}