import React from 'react'
import { IPost } from '../../store/types/jsonPlaceholder'
import { Post } from './Post'

export const PostsList: React.FC<{posts: IPost[]}> = ({ posts }) => {
  return (  
    <div>
      {posts.map(post => {
        return <Post key={post.id} {...post} />
      })}
    </div>
  )
}
