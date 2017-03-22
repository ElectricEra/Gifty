import React from 'react';

export const ProfileGift = (props) => {
  return (
		<div className="row center">
      <img src={props.src} className="my-profile-pictures-wanted circle" />
      <p className="center">{props.name}</p>
    </div>
  )
}