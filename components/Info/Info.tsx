import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Link from 'next/link';
import { useAppSelector } from '../../hooks/redux'
import { InfoItemsList } from './InfoItems/InfoItemsList'

export const Info: React.FC = () => {
  const {currentUser} = useAppSelector(state => state.users)
  const {asPath} = useRouter()
  // @ts-nocheck
  return (
    <div className='info'>
      <div className="info-header">
        <h3 className="info__title">{currentUser?.name}</h3>
        <div className="info__value">{currentUser?.email}</div>
      </div>
      <InfoItemsList {...currentUser} />

      {asPath === '/' ?
        <Link href={`/posts/${currentUser?.id}`}>
          <button className="info__btn">Смотреть посты</button>
        </Link>
      : null}
    </div>
  )
}


