import React from 'react'
import { IComment } from '../../store/types/jsonPlaceholder'
import { CardComment } from './Comment'

export const CommentsList: React.FC<{comments: IComment[]}> = ({ comments }) => {
  return (
    <div className='card-comments'>
      {comments.map(comment => <CardComment key={comment.id} {...comment} />)}
    </div>
  )
}
