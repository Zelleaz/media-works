import React from 'react'
import { IComment } from '../../store/types/jsonPlaceholder'

export const CardComment: React.FC<IComment> = ({body, email, id, name, postId}) => {
  return (
    <div className='card-comment'>
      <h5 className="card-comment__title">{name}</h5>
      <div className="card-comment__descr">{body}</div>
    </div>
  )
}
