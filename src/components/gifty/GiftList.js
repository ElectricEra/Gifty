import React from 'react'
import {GiftItem} from './GiftItem'

export const GiftList = (props) => {
  return (
    <div>
      <ul>
        {props.gifts.map(gift => <GiftItem key={gift.id} {...gift}/>)}
      </ul>
    </div>
  )
}
