import React from 'react'
import {InputWrapperSmall} from '../'

export const RadioInput = (props) => {
  return (
    <InputWrapperSmall>
      <span className="my-checkbox-padding">
          <input name="group1" type="radio" id={props.inputId} />
          <label htmlFor={props.inputId}>{props.children}</label>
      </span>
    </InputWrapperSmall>
  )
}
