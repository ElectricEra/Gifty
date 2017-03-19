import React from 'react';

export const ProfilePicture = (props) => {
  	return (
		<div className="row center">
            <img src={props.img} alt="" className="circle responsive-img my-profile-pic" />
        </div>
  	)
}
