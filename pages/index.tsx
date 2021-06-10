import { NextPage } from "next";
import React, { useEffect } from "react";
import { getPosts, getUsers } from "../api/api";
import { Info } from "../components/Info/Info";
import { Navbar } from "../components/Navbar/Navbar";
import { CardsList } from "../components/Users/CardsList";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { loadPostsCreator } from "../store/creators/posts";
import { loadUsersCreator } from "../store/creators/users";
import { IPost, IUser } from "../store/types/jsonPlaceholder";

const Index: NextPage<{users: IUser[], posts: IPost[]}> = ({ users, posts }) => {
  const dispatch = useAppDispatch()
  const {currentUser} = useAppSelector(state => state.users)

  useEffect(() => {
    dispatch(loadUsersCreator(users))
    dispatch(loadPostsCreator(posts))
  }, [])

  return ( 
    <div className="container">
      <Navbar />
      <div className='page'>
        <h1 className='page__title'>Пользователи</h1>
        
        <CardsList users={users} />
      </div>
      {currentUser.id !== 0 && <Info />}
    </div>
  );
}

Index.getInitialProps = async () => {
  const data = await getUsers()
  const posts = await getPosts()

  return {
    users: data,
    posts
  }
}

export default Index;