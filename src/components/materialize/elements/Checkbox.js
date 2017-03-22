import React from 'react';

export const Checkbox = (props) => {
  return (
    <p>
      <input
        type="checkbox"
        id={props.id}
        value={props.id}
        onBlur={props.onBlur} />
      <label htmlFor={props.id} 
        onChange={props.onChange}>{props.children}</label>
    </p>
  )
}
