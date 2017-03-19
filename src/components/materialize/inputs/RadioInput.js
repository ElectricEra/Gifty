import React from 'react'
import {InputWrapperSmall} from '../'

export const RadioInput = (props) => {
  return (
    <InputWrapperSmall>
      <span className="my-checkbox-padding">
          <input onChange={props.onChange} onBlur={props.onBlur} name="group1" type="radio" id={props.id} />
          <label htmlFor={props.id}>{props.children}</label>
      </span>
    </InputWrapperSmall>
  )
}
