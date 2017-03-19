import React from 'react';
import {InputWrapper} from '../'
import {Row} from '../'


export const Form = (props) => {
  return (
    <InputWrapper>
      <form id={props.id}>
          {props.children}
      </form>
    </InputWrapper>
  )
}
