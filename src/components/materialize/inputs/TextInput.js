import React from 'react'
import {InputWrapper} from '../'
import {InputWrapperSmall} from '../'

export const TextInput = (props) => {
  let Wrapper = props.size === 'small' ? InputWrapperSmall : InputWrapper;
  return (
    <Wrapper>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
        id={props.id}
        type={props.type}
        className={props.className}/>
    </Wrapper>
  )
}
