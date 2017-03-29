import React from 'react';

export const ProfileTheme = (props) => {
    return (
	    <div
        className='theme-picker-item'
        id = {props.id}
        onClick = {props.onClick}
        style = {props.style}>
        {props.children}
      </div>
  )
}
