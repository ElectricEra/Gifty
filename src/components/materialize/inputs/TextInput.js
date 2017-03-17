import React from 'react'
import {InputWrapper} from '../'
import {InputWrapperSmall} from '../'


export const TextInput = (props) => {
  let Wrapper = props.size === 'small' ? InputWrapperSmall : InputWrapper;
  return (
    <Wrapper>
      <label htmlFor={props.inputId}>{props.children}</label>
      <input onChange={props.onChange} id={props.inputId} type="text" className="validate" />
    </Wrapper>
  )
}
