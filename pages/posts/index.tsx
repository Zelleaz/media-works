import { NextPage } from 'next'
import React, { useEffect, useLayoutEffect } from 'react'
import { getPosts } from '../../api/api'
import { Info } from '../../components/Info/Info'
import { Navbar } from '../../components/Navbar/Navbar'
import { PostsList } from '../../components/Posts/PostsList'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { loadPostsCreator } from '../../store/creators/posts'
import { IPost } from '../../store/types/jsonPlaceholder'

const Posts: NextPage<{propsPosts: IPost[]}> = ({ propsPosts }) => {
  const { posts } = useAppSelector(state => state.posts)
  const { currentUser } = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadPostsCreator(propsPosts))
  }, [])

  let preparedPosts: IPost[] = []
  
  if (currentUser.id !== 0) {
    preparedPosts = posts.filter(post => post.userId === currentUser.id)
  } else {
    preparedPosts = posts.slice(-20)
  }

  

  return (
    <div className="container">
      <Navbar />
      <div className='page'>
        <h1 className="page__title">Посты</h1>
        <PostsList posts={preparedPosts} />
      </div>
      {currentUser.id !== 0 && <Info />}
    </div>
  )
}

export default Posts

Posts.getInitialProps = async () => {
  const posts = await getPosts()

  return {
    propsPosts: posts
  }
}