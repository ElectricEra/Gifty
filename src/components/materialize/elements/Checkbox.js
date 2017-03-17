import React from 'react'

export const Checkbox = (props) => {
  return (
    <p>
      <input type="checkbox" id={props.inputId} value={props.inputId} />
      <label htmlFor={props.inputId} onChange={props.onChange}>{props.children}</label>
    </p>
  )
}
