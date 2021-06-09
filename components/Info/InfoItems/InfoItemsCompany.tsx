import React from 'react'
import { ICompany } from '../../../store/types/jsonPlaceholder'

export const InfoItemsCompany: React.FC<ICompany> = ({bs, catchPhrase, name}) => {
  return (
    <div>
      Company <span className='info__primary'>{name}</span>. {catchPhrase}, {bs}
    </div>
  )
}
