import { NextPage } from 'next'
import React, { useLayoutEffect } from 'react'
import { getPosts } from '../../api/api'
import { Info } from '../../components/Info/Info'
import { Navbar } from '../../components/Navbar/Navbar'
import { PostsList } from '../../components/Posts/PostsList'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { loadPostsCreator } from '../../store/creators/posts'
import { IPost } from '../../store/types/jsonPlaceholder'

const Posts: NextPage<{propsPosts: IPost[]}> = ({ propsPosts }) => {
  const { posts } = useAppSelector(state => state.posts)
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    dispatch(loadPostsCreator(propsPosts))
  }, [])

  let preparedPosts: IPost[] = posts.slice(-20)

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