import React from 'react'
import { IUser } from '../../store/types/jsonPlaceholder'
import { Card } from './Card'

export const CardsList: React.FC<{users: IUser[]}> = ({ users }) => {
  return (
    <ul className='cards-list'>
      {users.map((user) => {
          return <Card key={user.id} {...user} />
      })}
    </ul>
  )
}
