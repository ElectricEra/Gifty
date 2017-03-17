import React from 'react'
import {GiftItem} from './GiftItem'

export const GiftList = (props) => {
  return (
    <ul>
      {console.log(props.gifts)}
    </ul>
  )
}

//  {props.gifts.map((gift, index) => <GiftItem key={index} {...gift}/>)}
