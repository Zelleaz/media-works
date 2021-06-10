import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts, getUsers } from '../../api/api'
import { Info } from '../../components/Info/Info'
import { Navbar } from '../../components/Navbar/Navbar'
import { PostsList } from '../../components/Posts/PostsList'
import { useAppSelector } from '../../hooks/redux'
import { loadPostsCreator } from '../../store/creators/posts'
import { loadUserInfoCreator, loadUsersCreator } from '../../store/creators/users'
import { IPost, IUser } from '../../store/types/jsonPlaceholder'

const PostWithParams: NextPage<{propsPosts: IPost[], propsUsers: IUser[]}> = ({ propsPosts, propsUsers }) => {
  const { posts } = useAppSelector(state => state.posts)
  const { users } = useAppSelector(state => state.users)
  const dispatch = useDispatch()
  
  const router = useRouter()
  const { userId } = router.query
  const id: string = userId?.toString() ?? ''

  useEffect(() => {
    dispatch(loadPostsCreator(propsPosts))
    dispatch(loadUsersCreator(propsUsers))
  }, [])

  useEffect(() => {
    if (users) {
      const user = users.find(user => user.id === parseInt(id))
      if (user) {
        dispatch(loadUserInfoCreator(user))
      } 
    }
  }, [users])

  useEffect(() => {
    preparedPosts = posts.filter(post => post.userId === parseInt(id))
  }, [posts])

  let preparedPosts = propsPosts.filter(post => post.userId === parseInt(id))

  return (
    <div className="container">
      <Navbar />
      <div className='page'>
        <h1 className="page__title">Посты</h1>

        <PostsList posts={preparedPosts} />
      </div>
      <Info />
    </div>
  )
}

export default PostWithParams


PostWithParams.getInitialProps = async () => {
  const posts = await getPosts()
  const users = await getUsers()

  return {
    propsPosts: posts,
    propsUsers: users
  }
}