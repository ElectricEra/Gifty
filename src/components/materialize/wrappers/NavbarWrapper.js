import React from 'react'

export const NavbarWrapper = (props) => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
              {props.children}
          </div>
        </div>
      </nav>
    </div>
  )
}
