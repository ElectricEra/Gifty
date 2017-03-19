import React from 'react'
import {InputWrapper} from '../'
import {InputWrapperSmall} from '../'
import { Field, reduxForm } from 'redux-form';


export const TextInput = (props) => {
  let Wrapper = props.size === 'small' ? InputWrapperSmall : InputWrapper;
  return (
    <Wrapper>
      <label htmlFor={props.id}>{props.children}</label>
      <input onChange={props.onChange} name={props.name} id={props.id} type="text" className={props.className}/>
    </Wrapper>
  )
}
