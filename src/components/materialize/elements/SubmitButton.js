import React from 'react'

export const SubmitButton = (props) => {
  return (
    <div className="input-field col s12 center">
      <button className="btn waves-effect waves-light" type="submit" name="action">
        {props.children}
      </button>
    </div>
  )
}
