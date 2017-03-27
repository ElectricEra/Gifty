import React from 'react'
import {InputWrapper} from '../'
 
export const NumberInput = (props) => {
  return (
    <InputWrapper>
        <label htmlFor={props.id}>{props.children}</label>
        <input
          onChange={props.onChange}
          onBlur={props.onBlur}
          id={props.id}
          type="number"
          name={props.name}
          onKeyPress = {(e) => {if (!(e.charCode >= 48 && e.charCode <= 57)){e.preventDefault()}}}
          min ="0"
          className="validate"
        />
    </InputWrapper>
  )
}
