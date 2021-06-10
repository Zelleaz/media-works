import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { getPosts } from '../../api/api'
import { Navbar } from '../../components/Navbar/Navbar'
import { PostsList } from '../../components/Posts/PostsList'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { loadPostsCreator } from '../../store/creators/posts'
import { IPost } from '../../store/types/jsonPlaceholder'

const Posts: NextPage<{propsPosts: IPost[]}> = ({ propsPosts }) => {
  const { posts } = useAppSelector(state => state.posts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadPostsCreator(propsPosts))
  }, [])

  let preparedPosts: IPost[] = propsPosts.slice(-20)
  
  useEffect(() => {
    preparedPosts = posts.slice(-20)
  }, [posts])

  return (
    <div className="container">
      <Navbar />
      <div className='page'>
        <h1 className="page__title">Посты</h1>

        <PostsList posts={preparedPosts} />
      </div>
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