import React from 'react'
import { IAddress } from '../../../store/types/jsonPlaceholder'
import { InfoParser } from './InfoParser'

export const InfoItemAddress: React.FC<IAddress> = ({city, street, suite, zipcode}) => {
  return (
    <>
      <InfoParser myKey='City' value={city} />
      <InfoParser myKey='Street' value={street} />
      <InfoParser myKey='Suite' value={suite} />
      <InfoParser myKey='Zipcode' value={zipcode} />
    </>
  )
}
