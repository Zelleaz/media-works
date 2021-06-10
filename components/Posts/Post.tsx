import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { getComments } from '../../api/api'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { loadPostCommentsCreator } from '../../store/creators/posts'
import { CommentsList } from '../Comments/CommentsList'
import { PostProps } from '../types'

export const Post: React.FC<PostProps> = ({body, id, userId, title}) => {
  const { posts } = useAppSelector(state => state.posts)
  const dispatch = useAppDispatch()
  const [isOpen, setOpen] = useState(false)

  const comments = posts.find(post => post.id === id)?.comments

  const loadComments = async () => {
    if (!comments) {
      const data = await getComments(id)
      dispatch(loadPostCommentsCreator({comments: data, postId: id}))
    }
    setOpen(!isOpen)
  }

  return (
    <div className='card'>
      <h3 className="card__title card__title_post">{title}</h3>

      <div className="card__descr">{body}</div>

      <button className="card__link" onClick={loadComments}>
        {isOpen ? 'Скрыть комментарии' : 'Открыть комментарии'}
      </button>

      {comments && <CSSTransition unmountOnExit mountOnEnter classNames='card-comments' in={isOpen} timeout={500}   ><CommentsList comments={comments} /></CSSTransition> }
    </div>
  )
}

