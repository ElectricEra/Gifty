import React from 'react';

export const ProfileName = (props) => {
  	return (
		<div className="row center">
            <span className="black-text my-user-text">
                {props.name}
            </span>
        </div>
  	)
}
