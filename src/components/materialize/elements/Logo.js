import React from 'react'

export const Logo = (props) => {
  return (
    <div className="row center">
        <img src={props.imgSrc} className="valign my-profile-image-login" />
    </div>
  )
}
