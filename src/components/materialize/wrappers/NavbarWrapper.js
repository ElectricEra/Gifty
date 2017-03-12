import React from 'react'

export const NavbarWrapper = (props) => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
            {props.children}
        </div>
      </nav>
    </div>
  )
}
