import React from 'react';

export const SubmitButton = (props) => {
  return (
    <div className="input-field col s12 center">
      <button
        className="btn waves-effect waves-light submit-button"
        type="submit"
        name="action"
        disabled={props.disabled}
        onSubmit={props.onSubmit}>
        {props.children}
      </button>
    </div>
  )
}
