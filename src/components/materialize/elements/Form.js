import React from 'react';
import {InputWrapper} from '../'
import {Row} from '../'


export const Form = (props) => {
  return (
    <InputWrapper>
      <form id={props.id} onSubmit={props.onSubmit}>
          {props.children}
      </form>
    </InputWrapper>
  )
}
