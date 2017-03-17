import React from 'react';

export const GiftItem = (props) => {
  return (
    <li>
    {console.log(props.gift)}
      <h2>{props.gift.name}</h2>
    </li>
  )
}
