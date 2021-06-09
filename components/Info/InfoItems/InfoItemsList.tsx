import React from 'react'
import { IUser } from '../../../store/types/jsonPlaceholder'
import { InfoItemAddress } from './InfoItemAddress'
import { InfoItemsCompany } from './InfoItemsCompany'
import { InfoParser } from './InfoParser'

export const InfoItemsList: React.FC<IUser> = ({address, company, phone, username, website}) => {
  return (
    <div className='info-list'>
      <InfoParser myKey='Phone' value={phone} />
      <InfoParser myKey='Username' value={username} />
      <InfoParser myKey='Website' value={website} />
      <InfoItemAddress {...address} />
      <InfoItemsCompany {...company} />
    </div>
  )
}
