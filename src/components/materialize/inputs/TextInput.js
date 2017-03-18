import React from 'react'
import {InputWrapper} from '../'
import {InputWrapperSmall} from '../'


export const TextInput = (props) => {
  let Wrapper = props.size === 'small' ? InputWrapperSmall : InputWrapper;
  return (
    <Wrapper>
      <label htmlFor={props.id}>{props.children}</label>
      <input onChange={props.onChange} id={props.id} name={props.name} type="text" className="validate" />
    </Wrapper>
  )
}
