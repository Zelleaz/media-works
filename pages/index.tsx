import { NextPage } from "next";
import React, { useEffect } from "react";
import { getUsers } from "../api/api";
import { Info } from "../components/Info/Info";
import { Navbar } from "../components/Navbar/Navbar";
import { CardsList } from "../components/Users/CardsList";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { loadUsersCreator } from "../store/creators/users";
import { IUser } from "../store/types/jsonPlaceholder";

const Index: NextPage<{users: IUser[]}> = ({ users }) => {
  const dispatch = useAppDispatch()
  const {currentUser} = useAppSelector(state => state.users)

  useEffect(() => {
    dispatch(loadUsersCreator(users))
  }, [])

  return ( 
    <div className="container">
      <Navbar />
      <div className='page'>
        <CardsList users={users} />
      </div>
      {currentUser && <Info />}
    </div>
  );
}

Index.getInitialProps = async () => {
  const data = await getUsers()

  return {
    users: data
  }
}

export default Index;