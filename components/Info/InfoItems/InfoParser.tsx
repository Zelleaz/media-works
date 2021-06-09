import React from 'react'
import { IInfoParserProps } from '../../types'

export const InfoParser: React.FC<IInfoParserProps> = ({myKey, value}) => {
  return (
    <div className='info-list__item'>
      <div className="info__title">{myKey}</div>
      <div className="info__value info__primary">{value}</div>
    </div>
  )
}
