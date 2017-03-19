import React from "react";
import {IndexLink, Link} from 'react-router';
import {NavbarWrapper, BasicWrapper} from './materialize';
import { connect } from 'react-redux';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <NavbarWrapper>
          <BasicWrapper>
          {/* TODO: Action for reseting props*/}
            <Link to="app" className="brand-logo">
              <img className="logo" src="images/gifty-white.svg" alt="Gifty"/>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {/*Log in*/}
                <li><Link href="profile">Profile</Link></li>
                <li><Link href="history">History</Link></li>
                <li><Link href="friends">Friends</Link></li>
                <li><Link href="settings">Settings</Link></li>


                {/*Log out*/}
                <li><Link to="login">Log in</Link></li>
            </ul>
          </BasicWrapper>
        </NavbarWrapper>
      </div>
    );
  }
};
