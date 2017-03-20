import React from 'react'

export const DefaultBoxWrapper = (props) => {
  return (
    <div className="card-panel my-default-box">
        {props.children}
    </div>
  )
}