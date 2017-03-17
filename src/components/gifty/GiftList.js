import React from 'react'

export const GiftList = (props) => {
  return (
    <ul>
     {props.gifts.map((gift, index) => {
       return <li key={index}>{gift.name}</li>
     })}
    </ul>
  )
}
