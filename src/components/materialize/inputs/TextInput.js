import React from 'react'
import {InputWrapper} from '../'

export const TextInput = (props) => {
  return (
    <InputWrapper>
      <label htmlFor={props.inputId}>{props.children}</label>
      <input id={props.inputId} type="text" className="validate" />
    </InputWrapper>
  )
}
