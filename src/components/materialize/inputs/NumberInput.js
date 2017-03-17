import React from 'react'
import {InputWrapper} from '../'

export const NumberInput = (props) => {
  return (
    <InputWrapper>
        <label htmlFor={props.id}>{props.children}</label>
        <input onChange={props.onChange} id={props.id} type="number" className="validate" />
    </InputWrapper>
  )
}
