import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import { InfoItemsList } from './InfoItems/InfoItemsList'

export const Info: React.FC = () => {
  const {currentUser} = useAppSelector(state => state.users)

  // @ts-nocheck
  return (
    <div className='info'>
      <div className="info-header">
        <h3 className="info__title">{currentUser?.name}</h3>
        <div className="info__value">{currentUser?.email}</div>
      </div>
      <InfoItemsList {...currentUser} />
    </div>
  )
}


