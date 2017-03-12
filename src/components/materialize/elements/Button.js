import React from 'react'
import {Link} from 'react-router'

export const Button = (props) => {
  return (
    <div className="input-field col s12 center">
      <Link to={props.to} className="waves-effect waves-light btn my-theme-color my-button">{props.children}</Link>
    </div>
  )
}
